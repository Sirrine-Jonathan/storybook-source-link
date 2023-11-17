const { Output } = require('./stories/Output/Output.js');
const { getStories } = require('./stories/util.tsx');
const stories = getStories(Output);

console.log(stories);