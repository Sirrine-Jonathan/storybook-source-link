import { Component } from './Component';

const componentParams = {}

export default {
    title: 'Manual Testing/Without Component Params',
    component: Component,
    parameters: componentParams,
    tags: ['autodocs']
};

const details = `
    Component sourceLinkPrefix: ${componentParams.sourceLinkPrefix}
    Component sourceLink: ${componentParams.sourceLink}
`
    
const Template = (args) => <Component {...args} />;

// BOTH:NONE:JUST_LINK
export const STORY_WITH_LINK = Template.bind({});
STORY_WITH_LINK.parameters = {
    sourceLink: 'output/output.js'
}
STORY_WITH_LINK.args = {
    expectedLink: 'https://github.com/Sirrine-Jonathan/storybook-source-link/blob/main/stories/output/output.js',
    title: 'STORY_WITH_PREFIX',
    notes: `Overrides just the prefix, inheriting the link or suffix part from the preview level`,
    details: `
        ${details}
        Story sourceLinkPrefix: ${STORY_WITH_LINK.parameters?.sourceLinkPrefix}
        Story sourceLink: ${STORY_WITH_LINK.parameters?.sourceLink}
    `
};

// BOTH:NONE:JUST_PREFIX
export const STORY_WITH_PREFIX = Template.bind({});
STORY_WITH_PREFIX.parameters = {
    sourceLinkPrefix: 'https://raw.githubusercontent.com/Sirrine-Jonathan/storybook-source-link/main/stories/'
}
STORY_WITH_PREFIX.args = {
    expectedLink: 'https://raw.githubusercontent.com/Sirrine-Jonathan/storybook-source-link/main/stories/ManualTesting/Component.js',
    title: 'STORY_WITH_PREFIX',
    notes: `Overrides just the prefix, inheriting the link or suffix part from the preview level`,
    details: `
        ${details}
        Story sourceLinkPrefix: ${STORY_WITH_PREFIX.parameters?.sourceLinkPrefix}
        Story sourceLink: ${STORY_WITH_PREFIX.parameters?.sourceLink}
    `
};

// BOTH:NONE:NONE - shows how stories can inherit all the way from the preview level
export const STORY_WITHOUT_PARAMS = Template.bind({});
STORY_WITHOUT_PARAMS.args = {
    expectedLink: 'https://github.com/Sirrine-Jonathan/storybook-source-link/blob/main/stories/ManualTesting/Component.js',
    title: 'STORY_WITHOUT_PARAMS',
    notes: `With no params given to the story, it's left to inherit from the component or preview.
     In this case, it inherits both params from the preview level`,
    details: `
        ${details}
        Story sourceLinkPrefix: ${STORY_WITHOUT_PARAMS.parameters?.sourceLinkPrefix}
        Story sourceLink: ${STORY_WITHOUT_PARAMS.parameters?.sourceLink}
    `
};




