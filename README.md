# Storybook Addon Source Link
![npm](https://img.shields.io/npm/v/storybook-source-link) ![npm](https://img.shields.io/npm/dw/storybook-source-link)

Provides a link to the story's source in the toolbar.

## Usage

Define a `sourceLink` parameter, or a `sourceLinkPrefix` parameter, both globally, at the component level, and/or at the story level.
See the [rules of parameter inheritance](https://storybook.js.org/docs/react/writing-stories/parameters#rules-of-parameter-inheritance)

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

The params defined at the component level supercede those defined at the global level in the `.storybook/preview.js` file.

This can be done at the story level as well to override both the global settings and the component level settings.

For each story requiring more specific treatment in each `*.stories.js` file, define a `sourceLink` parameter  
or both a `sourceLinkPrefix` and a `sourceLink` parameter like so:

```js
export const Primary = () => (
  <Button>Primary</Button>
);
Primary.parameters = {
  sourceLink: '<link to source>'
  sourceLinkPrefix: '<prefix to link>'
};
```

If the parameter is set, clicking the icon button will take you to the resolved source link.

![Screen Shot 2022-03-23 at 1 15 50 PM](https://user-images.githubusercontent.com/24869532/159789033-8aaa0813-9434-458d-ae2f-c2aae36da426.png)

The icon will be inactive if the params resolve to only a prefix and no link.
This would be the case for all stories if you define only a `sourceLinkPrefix` parameter gobally, and no `sourceLink` parameter in any component or story.

If an inactive source link is clicked, a tool-top will remind the user of this usage.

## Outcomes of all parameter configurations

Keep in mind that some of the possible configurations can result in links that may not have been intended.  
For example, if you set a sourceLinkPrefix param on the story but not a sourceLink, the prefix set on the story will be used with the next sourceLink param defined upwards in the hierarchy. You can end up with a link that doesn't make sense.  

***It almost always is the case that you want to set a sourceLink param wherever you are setting a sourceLinkPrefix.***

| sourceLinkPrefix in preview.js | sourceLink in preview.js | sourceLinkPrefix in component | sourceLink in component | sourceLinkPrefix in story | sourceLink in story |           link                  |
|:------------------------------:|:------------------------:|:-----------------------------:|:-----------------------:|:-------------------------:|:-------------------:|:-------------------------------:|
|                ✔               |             ✔            |               ✔               |            ✔            |             ✔             |          ✔          | story-prefix:story-link         |
|                ✔               |             ✔            |               ✔               |            ✔            |             ✔             |                     | story-prefix:component-link     |
|                ✔               |             ✔            |               ✔               |            ✔            |                           |          ✔          | component-prefix:story-link     |
|                ✔               |             ✔            |               ✔               |            ✔            |                           |                     | component-prefix:component-link |
|                ✔               |             ✔            |               ✔               |                         |             ✔             |          ✔          | story-prefix:story-link         |
|                ✔               |             ✔            |               ✔               |                         |             ✔             |                     | story-prefix:preview-link       |
|                ✔               |             ✔            |               ✔               |                         |                           |          ✔          | component-prefix:story-link     |
|                ✔               |             ✔            |               ✔               |                         |                           |                     | component-prefix:preview-link   |
|                ✔               |             ✔            |                               |            ✔            |             ✔             |          ✔          | story-prefix:story-link         |
|                ✔               |             ✔            |                               |            ✔            |             ✔             |                     | story-prefix:component-link     |
|                ✔               |             ✔            |                               |            ✔            |                           |          ✔          | preview-prefix:story-link       |
|                ✔               |             ✔            |                               |            ✔            |                           |                     | preview-prefix:component-link   |
|                ✔               |             ✔            |                               |                         |             ✔             |          ✔          | story-prefix:story-link         |
|                ✔               |             ✔            |                               |                         |             ✔             |                     | story-prefix:preview-link       |
|                ✔               |             ✔            |                               |                         |                           |          ✔          | preview-prefix:story-link       |
|                ✔               |             ✔            |                               |                         |                           |                     | preview-prefix:preview-link     |
|                ✔               |                          |               ✔               |            ✔            |             ✔             |          ✔          | story-prefix:story-link         |
|                ✔               |                          |               ✔               |            ✔            |             ✔             |                     | story-prefix:component-link     |
|                ✔               |                          |               ✔               |            ✔            |                           |          ✔          | component-prefix:story-link     |
|                ✔               |                          |               ✔               |            ✔            |                           |                     | component-prefix:component-link |
|                ✔               |                          |               ✔               |                         |             ✔             |          ✔          | story-prefix:story-link         |
|                ✔               |                          |               ✔               |                         |             ✔             |                     | link to info                    |
|                ✔               |                          |               ✔               |                         |                           |          ✔          | component-prefix:story-link     |
|                ✔               |                          |               ✔               |                         |                           |                     | link to info                    |
|                ✔               |                          |                               |            ✔            |             ✔             |          ✔          | story-prefix:story-link         |
|                ✔               |                          |                               |            ✔            |             ✔             |                     | story-prefix:component-link     |
|                ✔               |                          |                               |            ✔            |                           |          ✔          | preview-prefix:story-link       |
|                ✔               |                          |                               |            ✔            |                           |                     | link to info                    |
|                ✔               |                          |                               |                         |             ✔             |          ✔          | story-prefix:story-link         |
|                ✔               |                          |                               |                         |             ✔             |                     | link to info                    |
|                ✔               |                          |                               |                         |                           |          ✔          | preview-prefix:story-link       |
|                ✔               |                          |                               |                         |                           |                     | link to info                    |
|                                |             ✔            |               ✔               |            ✔            |             ✔             |          ✔          | story-prefix:story-link         |
|                                |             ✔            |               ✔               |            ✔            |             ✔             |                     | story-prefix:component-link     |
|                                |             ✔            |               ✔               |            ✔            |                           |          ✔          | component-prefix:story-link     |
|                                |             ✔            |               ✔               |            ✔            |                           |                     | component-prefix:component-link |
|                                |             ✔            |               ✔               |                         |             ✔             |          ✔          | story-prefix:story-link         |
|                                |             ✔            |               ✔               |                         |             ✔             |                     | story-prefix:component-link     |
|                                |             ✔            |               ✔               |                         |                           |          ✔          | component-prefix:story-link     |
|                                |             ✔            |               ✔               |                         |                           |                     | component-prefix:preview-link   |
|                                |             ✔            |                               |            ✔            |             ✔             |          ✔          | story-prefix:story-link         |
|                                |             ✔            |                               |            ✔            |             ✔             |                     | story-prefix:component-link     |
|                                |             ✔            |                               |            ✔            |                           |          ✔          | story-link                      |
|                                |             ✔            |                               |            ✔            |                           |                     | component-link                  |
|                                |             ✔            |                               |                         |             ✔             |          ✔          | story-prefix:story-link         |
|                                |             ✔            |                               |                         |             ✔             |                     | story-prefix:preview-link       |
|                                |             ✔            |                               |                         |                           |          ✔          | story-link                      |
|                                |             ✔            |                               |                         |                           |                     | preview-link                    |
|                                |                          |               ✔               |            ✔            |             ✔             |          ✔          | story-prefix:story-link         |
|                                |                          |               ✔               |            ✔            |             ✔             |                     | story-prefix:component-link     |
|                                |                          |               ✔               |            ✔            |                           |          ✔          | component-prefix:story-link     |
|                                |                          |               ✔               |            ✔            |                           |                     | component-prefix:component-link |
|                                |                          |               ✔               |                         |             ✔             |          ✔          | story-prefix:story-link         |
|                                |                          |               ✔               |                         |             ✔             |                     | link to info                    |
|                                |                          |               ✔               |                         |                           |          ✔          | component-prefix:story-link     |
|                                |                          |               ✔               |                         |                           |                     | link to info                    |
|                                |                          |                               |            ✔            |             ✔             |          ✔          | story-prefix:story-link         |
|                                |                          |                               |            ✔            |             ✔             |                     | story-prefix:component-link     |
|                                |                          |                               |            ✔            |                           |          ✔          | story-link                      |
|                                |                          |                               |            ✔            |                           |                     | preview-prefix:component-link   |
|                                |                          |                               |                         |             ✔             |          ✔          | story-prefix:story-link         |
|                                |                          |                               |                         |             ✔             |                     | link to info                    |
|                                |                          |                               |                         |                           |          ✔          | story-link                      |
|                                |                          |                               |                         |                           |                     | link to info                    |
