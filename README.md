<h1 id="main">Storybook Addon Source Link</h1>

[![Storybook](https://img.shields.io/badge/-Storybook-FF4785?&logo=storybook&logoColor=white)](https://storybook.js.org/addons/storybook-source-link/) [![npm](https://img.shields.io/npm/v/storybook-source-link?logo=npm)](https://www.npmjs.com/package/storybook-source-link?activeTab=versions) [![npm](https://img.shields.io/npm/dt/storybook-source-link)](https://www.npmjs.com/package/storybook-source-link) [![npm](https://img.shields.io/npm/dm/storybook-source-link)](https://www.npmjs.com/package/storybook-source-link) [![npm](https://img.shields.io/npm/dw/storybook-source-link)](https://www.npmjs.com/package/storybook-source-link) [![npm](https://img.shields.io/npm/l/storybook-source-link)](https://www.npmjs.com/package/storybook-source-link?activeTab=license)  
[![npms.io (final)](https://img.shields.io/npms-io/final-score/storybook-source-link)]() [![npms.io (quality)](https://img.shields.io/npms-io/quality-score/storybook-source-link)](https://npms.io/about) [![npms.io (maintenance)](https://img.shields.io/npms-io/maintenance-score/storybook-source-link)](https://npms.io/about) [![npms.io (popularity)](https://img.shields.io/npms-io/popularity-score/storybook-source-link)](https://npms.io/about)  
[![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/storybook-source-link?logo=snyk)](https://libraries.io/npm/storybook-source-link) [![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/storybook-source-link?logo=libraries.io&logoColor=white)](https://libraries.io/npm/storybook-source-link) [![Libraries.io SourceRank](https://img.shields.io/librariesio/sourcerank/npm/storybook-source-link?logo=libraries.io&logoColor=white)](https://docs.libraries.io/overview.html#sourcerank)


Provides a link to the story's source in the toolbar.


<h2 id="installation">Installation</h2>

```bash
npm install storybook-source-link
```
<br />

![Screen Shot 2022-03-23 at 1 15 50 PM](https://user-images.githubusercontent.com/24869532/159789033-8aaa0813-9434-458d-ae2f-c2aae36da426.png)  
<small>Without any additional configuration,  
you should see a new link in the toolbar</small>

<h2 id="usage">Usage</h2>

Define a `sourceLink` parameter, or a `sourceLinkPrefix` parameter, both globally, at the component level, and/or at the story level.
See the [rules of parameter inheritance](https://storybook.js.org/docs/react/writing-stories/parameters#rules-of-parameter-inheritance). This allows you control how the link is generated for each story.

Here's the relevant code which governs how the link gets generated:
```ts
  const getLink = (prefix: string | undefined, link: string | undefined) => {
    if (!link) return null;
    if (prefix) link = `${prefix}${link}`
    return link
  }
```
See [full source](https://github.com/Sirrine-Jonathan/storybook-source-link/blob/main/src/Tool.tsx) for how it's rendered.


<h3 id="global-level">Global level</h3>

You may set global parameters to define a default link in the `.storybook/preview.js` file like so:

```js
export const parameters = {
  sourceLink: '<link to source>'
  sourceLinkPrefix: '<prefix to link>'
}
```

A few examples might look like:

```js
export const parameters = {
  // each story will link here, unless specified otherwise in either the component, or the story
  sourceLink: 'https://github.com/Sirrine-Jonathan/storybook-source-link/',
}
```

```js
export const parameters = {
  // stories will link to https://github.com/Sirrine-Jonathan/storybook-source-link
  sourceLink: 'storybook-source-link/',
  sourceLinkPrefix: 'https://github.com/Sirrine-Jonathan/'
  // the sourceLinkPrefix here allows us to define sourceLinks at the component and story level
  // that use the same prefix 
}
```

```js
export const parameters = {
  // stories with a `sourceLink` parameter defined at the story or component level will use this as a prefix,
  // unless a different prefix is defined at the component or story level as well
  sourceLinkPrefix: 'https://github.com/Sirrine-Jonathan/storybook-source-link/blob/main/stories/'
  // no sourceLink parameter is defined here, so any story missing a sourceLink parameter will have no link
  // unless a link is specified at the component level
}
```

<h3 id="component-level">Component level</h3>

For more fine tuning, inside each component you may define the same parameters to be used for every story inside the component.

`*.stories.js`

```js
export default {
  title: 'Example',
  component: Button,
  parameters: {
    sourceLink: '<link to source>'
    sourceLinkPrefix: '<prefix to link>'
  }
};
```

An example of this could be:

```js
export default {
  title: 'Example',
  component: Button,
  parameters: {
    sourceLink: 'https://github.com/Sirrine-Jonathan/storybook-source-link/blob/main/stories/Button.js',
    sourceLinkPrefix: '' // pass an empty string to disable the prefix set globally for stories for this component
  }
};
```

The params defined at the component level supersede those defined at the global level in the `.storybook/preview.js` file.

<h3 id="story-level">Story level</h3>

This can be done at the story level to override both the global settings and the component level settings.

For each story requiring more specific treatment, in each `*.stories.js` file define a `sourceLink` parameter  
or both a `sourceLinkPrefix` and a `sourceLink` parameter like so:

```js
export const PrimaryStory = () => (
  <Button>Primary</Button>
);
PrimaryStory.parameters = {
  sourceLink: '<link to source>'
  sourceLinkPrefix: '<prefix to link>'
};
```

<h2 id="outcomes">Outcomes of all parameter configurations</h2>

The tables below are to help you get an idea of what to expect when you click the icon.

Keep in mind that some of the possible configurations can result in links that may not have been intended.  
For example, if you set a sourceLinkPrefix param on the story but not a sourceLink, the prefix set on the story will be used with the next sourceLink param defined upwards in the hierarchy. You can end up with a link that doesn't make sense.  

***It almost always is the case that you want to set a sourceLink param wherever you are setting a sourceLinkPrefix at the component or story level.***

<br />

✅ &nbsp;&nbsp;sourceLinkPrefix  
✅ &nbsp;&nbsp;sourceLink  
```js
export const parameters = {
  // .storybook/preview.js
  sourceLink: '<link to source>'
  sourceLinkPrefix: '<prefix to link>'
}
```

| sourceLinkPrefix in component | sourceLink in component | sourceLinkPrefix in story | sourceLink in story |           link                  |
|:-----------------------------:|:-----------------------:|:-------------------------:|:-------------------:|:-------------------------------:|
|               ✔               |            ✔            |             ✔             |          ✔          | story-prefix:story-link         |
|               ✔               |            ✔            |             ✔             |                     | story-prefix:component-link     |
|               ✔               |            ✔            |                           |          ✔          | component-prefix:story-link     |
|               ✔               |            ✔            |                           |                     | component-prefix:component-link |
|               ✔               |                         |             ✔             |          ✔          | story-prefix:story-link         |
|               ✔               |                         |             ✔             |                     | story-prefix:preview-link       |
|               ✔               |                         |                           |          ✔          | component-prefix:story-link     |
|               ✔               |                         |                           |                     | component-prefix:preview-link   |
|                               |            ✔            |             ✔             |          ✔          | story-prefix:story-link         |
|                               |            ✔            |             ✔             |                     | story-prefix:component-link     |
|                               |            ✔            |                           |          ✔          | preview-prefix:story-link       |
|                               |            ✔            |                           |                     | preview-prefix:component-link   |
|                               |                         |             ✔             |          ✔          | story-prefix:story-link         |
|                               |                         |             ✔             |                     | story-prefix:preview-link       |
|                               |                         |                           |          ✔          | preview-prefix:story-link       |
|                               |                         |                           |                     | preview-prefix:preview-link     |

<br /> 

✅ &nbsp;&nbsp;sourceLinkPrefix  
❌ &nbsp;&nbsp;sourceLink  
```js
export const parameters = {
  // .storybook/preview.js
  sourceLink: '<link to source>'
}
```

| sourceLinkPrefix in component | sourceLink in component | sourceLinkPrefix in story | sourceLink in story |           link                  |
|:-----------------------------:|:-----------------------:|:-------------------------:|:-------------------:|:-------------------------------:|
|               ✔               |            ✔            |             ✔             |          ✔          | story-prefix:story-link         |
|               ✔               |            ✔            |             ✔             |                     | story-prefix:component-link     |
|               ✔               |            ✔            |                           |          ✔          | component-prefix:story-link     |
|               ✔               |            ✔            |                           |                     | component-prefix:component-link |
|               ✔               |                         |             ✔             |          ✔          | story-prefix:story-link         |
|               ✔               |                         |             ✔             |                     | link to info                    |
|               ✔               |                         |                           |          ✔          | component-prefix:story-link     |
|               ✔               |                         |                           |                     | link to info                    |
|                               |            ✔            |             ✔             |          ✔          | story-prefix:story-link         |
|                               |            ✔            |             ✔             |                     | story-prefix:component-link     |
|                               |            ✔            |                           |          ✔          | preview-prefix:story-link       |
|                               |            ✔            |                           |                     | link to info                    |
|                               |                         |             ✔             |          ✔          | story-prefix:story-link         |
|                               |                         |             ✔             |                     | link to info                    |
|                               |                         |                           |          ✔          | preview-prefix:story-link       |
|                               |                         |                           |                     | link to info                    |

<br /> 

❌ &nbsp;&nbsp;sourceLinkPrefix  
✅ &nbsp;&nbsp;sourceLink  
```js
export const parameters = {
  // .storybook/preview.js
  sourceLinkPrefix: '<prefix to link>'
}
```

| sourceLinkPrefix in component | sourceLink in component | sourceLinkPrefix in story | sourceLink in story |           link                  |
|:-----------------------------:|:-----------------------:|:-------------------------:|:-------------------:|:-------------------------------:|
|               ✔               |            ✔            |             ✔             |          ✔          | story-prefix:story-link         |
|               ✔               |            ✔            |             ✔             |                     | story-prefix:component-link     |
|               ✔               |            ✔            |                           |          ✔          | component-prefix:story-link     |
|               ✔               |            ✔            |                           |                     | component-prefix:component-link |
|               ✔               |                         |             ✔             |          ✔          | story-prefix:story-link         |
|               ✔               |                         |             ✔             |                     | story-prefix:component-link     |
|               ✔               |                         |                           |          ✔          | component-prefix:story-link     |
|               ✔               |                         |                           |                     | component-prefix:preview-link   |
|                               |            ✔            |             ✔             |          ✔          | story-prefix:story-link         |
|                               |            ✔            |             ✔             |                     | story-prefix:component-link     |
|                               |            ✔            |                           |          ✔          | story-link                      |
|                               |            ✔            |                           |                     | component-link                  |
|                               |                         |             ✔             |          ✔          | story-prefix:story-link         |
|                               |                         |             ✔             |                     | story-prefix:preview-link       |
|                               |                         |                           |          ✔          | story-link                      |
|                               |                         |                           |                     | preview-link                    |

<br /> 

❌ &nbsp;&nbsp;sourceLinkPrefix  
❌ &nbsp;&nbsp;sourceLink  
```js
export const parameters = {
  // .storybook/preview.js
}
```

| sourceLinkPrefix in component | sourceLink in component | sourceLinkPrefix in story | sourceLink in story |           link                  |
|:-----------------------------:|:-----------------------:|:-------------------------:|:-------------------:|:-------------------------------:|
|               ✔               |            ✔            |             ✔             |          ✔          | story-prefix:story-link         |
|               ✔               |            ✔            |             ✔             |                     | story-prefix:component-link     |
|               ✔               |            ✔            |                           |          ✔          | component-prefix:story-link     |
|               ✔               |            ✔            |                           |                     | component-prefix:component-link |
|               ✔               |                         |             ✔             |          ✔          | story-prefix:story-link         |
|               ✔               |                         |             ✔             |                     | link to info                    |
|               ✔               |                         |                           |          ✔          | component-prefix:story-link     |
|               ✔               |                         |                           |                     | link to info                    |
|                               |            ✔            |             ✔             |          ✔          | story-prefix:story-link         |
|                               |            ✔            |             ✔             |                     | story-prefix:component-link     |
|                               |            ✔            |                           |          ✔          | story-link                      |
|                               |            ✔            |                           |                     | preview-prefix:component-link   |
|                               |                         |             ✔             |          ✔          | story-prefix:story-link         |
|                               |                         |             ✔             |                     | link to info                    |
|                               |                         |                           |          ✔          | story-link                      |
|                               |                         |                           |                     | link to info                    |




[![Twitter Follow](https://img.shields.io/twitter/follow/Enirrisky)](https://twitter.com/Enirrisky?ref_src=twsrc%5Etfw)

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/sirrineprog)