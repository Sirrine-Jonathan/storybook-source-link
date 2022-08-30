const { Output } = require('./Output');
const { getStories } = require('../util.tsx');

module.exports = {
  ...getStories(Output),
  default: {
    title: 'Automated Testing/Output',
    component: Output,
  }
}