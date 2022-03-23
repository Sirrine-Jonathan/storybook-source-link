# Storybook Addon Source Link

Provides a link to the story's source in the toolbar. Initialized with this [template](https://github.com/storybookjs/addon-kit). Their you'll find specifics on development and release inside the `READEME.md`

## Usage

Inside each story, include a parameters for your stories source code.

```
export default {
  title: 'Example',
  component: Button,
  parameters: {
    sourceLink: '<link to source>'
  }
};
```

If the parameter is set, the icon which links to the source code in a new tab will be active

If an inactive source link is clicked, a tool-top will remind the user of this usage.
