import { Component } from './Component';

const componentParams = {
    sourceLinkPrefix: 'https://goo'
}

export default {
    title: 'Manual Testing/With Component Params',
    component: Component,
    parameters: componentParams,
    tags: ['autodocs']
};

const details = `
    Component sourceLinkPrefix: ${componentParams.sourceLinkPrefix}
    Component sourceLink: ${componentParams.sourceLink}
`
    
const Template = (args) => <Component {...args} />;

// BOTH:BOTH:BOTH
export const STORY_WITH_BOTH_PARAMS = Template.bind({});
STORY_WITH_BOTH_PARAMS.parameters = {
    sourceLinkPrefix: 'https://www.net',
    sourceLink: 'flix.com'
}
STORY_WITH_BOTH_PARAMS.args = {
    expectedLink: 'https://www.netflix.com/',
    title: 'STORY_WITH_BOTH_PARAMS',
    notes: "No matter what parameters are set at Component or Preview level, Story level supersedes all.",
    details: `
        ${details}
        Story sourceLinkPrefix: ${STORY_WITH_BOTH_PARAMS.parameters.sourceLinkPrefix}
        Story sourceLink: ${STORY_WITH_BOTH_PARAMS.parameters.sourceLink}
    `
}

// BOTH:BOTH:BOTH - override prefix, use story link without prefix
export const OVERRIDE_COMPONENT_PREFIX = Template.bind({});
OVERRIDE_COMPONENT_PREFIX.parameters = {
    sourceLinkPrefix: '',
    sourceLink: 'https://amazon.com'
}
OVERRIDE_COMPONENT_PREFIX.args = {
    expectedLink: 'https://amazon.com',
    title: 'OVERRIDE_COMPONENT_PREFIX',
    notes: `This component illustrates how you can override any parent prefixes by supplying an empty string 
    (no spaces or anything, literally just '') for the sourceLinkPrefix param`,
    details: `
        ${details}
        Story sourceLinkPrefix: ${OVERRIDE_COMPONENT_PREFIX.parameters.sourceLinkPrefix}
        Story sourceLink: ${OVERRIDE_COMPONENT_PREFIX.parameters.sourceLink}
    `
};

// BOTH:BOTH:BOTH - override prefix and link, use tooltip
export const OVERRIDE_ALL_WITHOUT_REPLACEMENT = Template.bind({});
OVERRIDE_ALL_WITHOUT_REPLACEMENT.parameters = {
    sourceLinkPrefix: '',
    sourceLink: ''
}
OVERRIDE_ALL_WITHOUT_REPLACEMENT.args = {
    expectedLink: '',
    title: 'OVERRIDE_ALL_WITHOUT_REPLACEMENT',
    notes: `Here we see that you can make a story ignore all params set on levels above it. 
    The book icon in the corner should not be highlighted for this story, and when you click it a tooltip 
    should appear instead of opening source code in an new tab`,
    details: `
        ${details}
        Story sourceLinkPrefix: ${OVERRIDE_ALL_WITHOUT_REPLACEMENT.parameters.sourceLinkPrefix}
        Story sourceLink: ${OVERRIDE_ALL_WITHOUT_REPLACEMENT.parameters.sourceLink}
    `
};

// BOTH:BOTH:JUST_PREFIX - override prefix at story level, but use component link
export const STORY_WITH_ONLY_PREFIX = Template.bind({});
STORY_WITH_ONLY_PREFIX.parameters = {
    sourceLinkPrefix: 'https://raw.githubusercontent.com/Sirrine-Jonathan/storybook-source-link/main/stories/'
}
STORY_WITH_ONLY_PREFIX.args = {
    expectedLink: 'https://raw.githubusercontent.com/Sirrine-Jonathan/storybook-source-link/main/stories/manualtesting/component.js',
    title: 'STORY_WITH_ONLY_PREFIX',
    notes: "Here's what happens if you supply sourceLinkPrefix to the story, but not a sourceLink, leaving it to inherit from the component or preview.",
    details: `
        ${details}
        Story sourceLinkPrefix: ${STORY_WITH_ONLY_PREFIX.parameters.sourceLinkPrefix}
        Story sourceLink: ${STORY_WITH_ONLY_PREFIX.parameters.sourceLink}
    `
};

// BOTH:BOTH:JUST_LINK - supply link at story level to use with component prefix. Should be the most common use case
export const COMPONENT_PREFIX_STORY_LINK = Template.bind({});
COMPONENT_PREFIX_STORY_LINK.parameters = {
    sourceLink: 'gle.com'
}
COMPONENT_PREFIX_STORY_LINK.args = {
    expectedLink: 'https://google.com',
    title: 'COMPONENT_PREFIX_STORY_LINK',
    notes: `This Component shows how the story link can be used with the component prefix, notice the preview prefix is ignored in this case. 
    This is the only story that makes use of the component prefix as it's intended.`,
    details: `
        ${details}
        Story sourceLinkPrefix: ${COMPONENT_PREFIX_STORY_LINK.parameters.sourceLinkPrefix}
        Story sourceLink: ${COMPONENT_PREFIX_STORY_LINK.parameters.sourceLink}
    `
};

// BOTH:BOTH:NONE - use params defined at component and preview level
export const NO_STORY_PARAMS = Template.bind({});
NO_STORY_PARAMS.args = {
    expectedLink: 'https://gooManualTesting/Component.js',
    title: 'NO_STORY_PARAMS',
    notes: `With no params given to the story, it's left to inherit from the component or preview. 
    It inherits the preview portion from the component (https://goo), 
    and the link portion from the preview level (ManualTesting/Component.js) which won't make a valid link.`,
    details: `
        ${details}
        Story sourceLinkPrefix: ${NO_STORY_PARAMS.parameters?.sourceLinkPrefix}
        Story sourceLink: ${NO_STORY_PARAMS.parameters?.sourceLink}
    `
};






