import React from 'react';
import renderer from 'react-test-renderer';
import SEO from './SEO';

describe('SEO', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SEO />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
