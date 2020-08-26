const path = require('path');
const _ = require('lodash');
const moment = require('moment');
const { execSync } = require('child_process');
const { paginate } = require('gatsby-awesome-pagination');
const siteConfig = require('./data/SiteConfig');

const postNodes = [];

function addSiblingNodes(createNodeField) {
  postNodes.sort(
    ({ frontmatter: { date: date1 } }, { frontmatter: { date: date2 } }) => {
      const dateA = moment(date1, siteConfig.dateFromFormat);
      const dateB = moment(date2, siteConfig.dateFromFormat);

      if (dateA.isBefore(dateB)) return 1;

      if (dateB.isBefore(dateA)) return -1;

      return 0;
    }
  );
  for (let i = 0; i < postNodes.length; i += 1) {
    const nextID = i + 1 < postNodes.length ? i + 1 : 0;
    const prevID = i - 1 >= 0 ? i - 1 : postNodes.length - 1;
    const currNode = postNodes[i];
    const nextNode = postNodes[nextID];
    const prevNode = postNodes[prevID];
    createNodeField({
      node: currNode,
      name: 'nextTitle',
      value: nextNode.frontmatter.title,
    });
    createNodeField({
      node: currNode,
      name: 'nextSlug',
      value: nextNode.fields.slug,
    });
    createNodeField({
      node: currNode,
      name: 'prevTitle',
      value: prevNode.frontmatter.title,
    });
    createNodeField({
      node: currNode,
      name: 'prevSlug',
      value: prevNode.fields.slug,
    });
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  let slug;
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);
    const gitCommitTime = execSync(
      `git log -1 --pretty=format:%aI ${node.fileAbsolutePath}`
    ).toString();
    const updatedAt = moment(gitCommitTime || node.frontmatter.date).format(
      'YYYY-MM-DD'
    );
    createNodeField({ node, name: 'updatedAt', value: updatedAt });

    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`;
    } else if (parsedFilePath.name !== 'index' && parsedFilePath.dir !== '') {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
    } else if (parsedFilePath.dir === '') {
      slug = `/${parsedFilePath.name}/`;
    } else {
      slug = `/${parsedFilePath.dir}/`;
    }

    if (Object.prototype.hasOwnProperty.call(node, 'frontmatter')) {
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug'))
        slug = `/${_.kebabCase(node.frontmatter.slug)}`;
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'date')) {
        const date = moment(node.frontmatter.date, siteConfig.dateFromFormat);
        if (!date.isValid)
          console.warn(`WARNING: Invalid date.`, node.frontmatter);

        createNodeField({
          node,
          name: 'date',
          value: date.toISOString(),
        });
      }
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'author')) {
        createNodeField({
          node,
          name: 'authorId',
          value: node.frontmatter.author,
        });
      }
    }

    const date = moment(node.frontmatter.date).format('YYYY/MM/DD');
    slug = `/${date}${slug}/`;
    createNodeField({ node, name: 'slug', value: slug });
    postNodes.push(node);
  }
};

exports.setFieldsOnGraphQLNodeType = ({ type, actions }) => {
  const { name } = type;
  const { createNodeField } = actions;
  if (name === 'MarkdownRemark') {
    addSiblingNodes(createNodeField);
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const postPage = path.resolve('src/views/pages/Post/index.js');
    const authorsPage = path.resolve('src/views/pages/Authors/index.js');
    const tagsPage = path.resolve('src/views/pages/Tags/index.js');
    const tagPage = path.resolve('src/views/pages/Tag/index.js');
    const authorPage = path.resolve('src/views/pages/Author/index.js');
    const seriesPage = path.resolve('src/views/pages/Series/index.js');
    resolve(
      graphql(
        `
          {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    tags
                    title
                    series
                  }
                  fields {
                    slug
                    authorId
                  }
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          /* eslint no-console: "off" */
          console.log(result.errors);
          reject(result.errors);
        }

        const tagSet = new Set();
        const authorSet = new Set();
        const seriesSet = new Set();
        const posts = result.data.allMarkdownRemark.edges;
        posts.forEach((edge, index) => {
          if (edge.node.frontmatter.tags) {
            edge.node.frontmatter.tags.forEach((tag) => {
              tagSet.add(tag);
            });
          }

          if (edge.node.fields.authorId) {
            authorSet.add(edge.node.fields.authorId);
          }

          if (edge.node.frontmatter.series) {
            seriesSet.add(edge.node.frontmatter.series);
          }

          createPage({
            path: edge.node.fields.slug,
            component: postPage,
            context: {
              slug: edge.node.fields.slug,
              prev: index === 0 ? null : posts[index - 1].node,
              next: index === posts.length - 1 ? null : posts[index + 1].node,
            },
          });
        });

        paginate({
          createPage,
          items: posts,
          itemsPerPage: 12,
          pathPrefix: ({ pageNumber }) =>
            pageNumber === 0 ? '/posts/' : '/posts',
          component: path.resolve('src/views/pages/Archive/index.js'),
        });

        const tagList = Array.from(tagSet);
        tagList.forEach((tag) => {
          createPage({
            path: `/tags/${_.kebabCase(tag)}/`,
            component: tagPage,
            context: {
              tag,
            },
          });
        });

        createPage({
          path: `/authors/`,
          component: authorsPage,
        });

        createPage({
          path: `/tags/`,
          component: tagsPage,
        });

        const authorList = Array.from(authorSet);
        authorList.forEach((author) => {
          createPage({
            path: `/authors/${author}/`,
            component: authorPage,
            context: {
              authorId: author,
            },
          });
        });

        const seriesList = Array.from(seriesSet);
        seriesList.forEach((series) => {
          createPage({
            path: `/series/${_.kebabCase(series)}/`,
            component: seriesPage,
            context: {
              series,
            },
          });
        });
      })
    );
  });
};
