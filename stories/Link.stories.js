import React from 'react';

import { Link } from './Link';

export default {
  title: 'Example/Link',
  component: Link,
  parameters: {
    sourceLinkPrefix: 'https://goo'
  }
};

const Template = (args) => <Link {...args} />;

export const Google = Template.bind({});
Google.args = {
  href: 'https://google.com',
  text: 'Google',
};
Google.parameters = {
  sourceLink: 'gle.com'
}

export const Amazon = Template.bind({});
Amazon.args = {
  href: 'https://amazon.com',
  text: 'Amazon',
};


export const Facebook = Template.bind({});
Facebook.args = {
  href: 'https://facebook.com',
  text: 'Facebook',
};
Facebook.parameters = {
  sourceLinkPrefix: 'https://www.google.com/search?q=',
  sourceLink: 'facebook'
}
