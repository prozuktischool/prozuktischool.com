(self.webpackChunkprozuktischool=self.webpackChunkprozuktischool||[]).push([[554],{2562:function(e,t,n){"use strict";var a=n(7294),r=n(5444),l=n(5125);t.Z=function(e){var t=e.limit,n=void 0===t?0:t,i=e.postEdges,c=void 0===i?[]:i,o=e.showAllPostButton,u=void 0!==o&&o,m=function(){var e=[];return c.forEach((function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead,language:t.node.frontmatter.language})})),n&&(e=e.splice(0,n)),e}();return a.createElement(l.kC,{mx:[0,-2],flexWrap:"wrap"},m.map((function(e){return a.createElement(l.xu,{key:e.title,width:[1,1/3],p:3},a.createElement(r.Link,{to:e.path},a.createElement(l.eB,{language:e.language},e.title)))})),c.length>n&&u&&a.createElement(l.xu,{p:3,width:1,display:"block",textAlign:"center"},a.createElement(r.Link,{to:"/posts/"},a.createElement(l.zx,{variant:"primary"},"সকল লেখা পড়ুন"))))}},4469:function(e,t,n){"use strict";var a=n(7294),r=n(5186),l=n(9925),i=n(7739),c=n(2797),o=n.n(c),u=n(5125),m=n(8511),s=n(666);t.Z=(0,i.$j)((function(e){return{theme:e.config.theme}}))((function(e){var t=e.children,n=e.theme,i=e.variant,c=void 0===i?"":i;return a.createElement(l.f6,{theme:m[n.name]},a.createElement(s.Z,null),a.createElement(a.Fragment,null,a.createElement(r.q,null,a.createElement("meta",{name:"description",content:o().siteDescription})),a.createElement(u.lb,null),a.createElement(u.xu,{maxWidth:"fixed"===c?960:"100%",margin:"0 auto",p:"fixed"===c?{xs:3,sm:4}:0,mt:48,minHeight:"70vh"},t),a.createElement(u.$_,null)))}))},4340:function(e,t,n){"use strict";n.d(t,{B:function(){return i},Z:function(){return c.Z}});var a=n(9756),r=n(7294),l=n(5125),i=function(e){var t=e.children,n=(0,a.Z)(e,["children"]);return r.createElement(l.xu,Object.assign({maxWidth:960,margin:"0 auto",p:{xs:3,sm:4}},n),t,r.createElement(l.zV,null))},c=n(4469)},2903:function(e,t,n){"use strict";n.r(t);var a=n(7294),r=n(4340),l=n(2562),i=n(5125);t.default=function(e){var t=e.data,n=e.pageContext,c=t.allMarkdownRemark.edges;return a.createElement(r.Z,{variant:"fixed"},a.createElement(i.HJ,{pageTitle:"লেখাসমূহ",pagePath:"/posts/"}),a.createElement(i.NZ,{title:"আমাদের প্রকাশিত লেখাসমূহ"}),a.createElement(l.Z,{postEdges:c}),a.createElement(i.uE,{pageContext:n}))}}}]);
//# sourceMappingURL=component---src-views-pages-archive-index-js-588f0c7bf259965d8c19.js.map