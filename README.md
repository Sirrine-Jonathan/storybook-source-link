# Storybook Addon Source Link

Provides a link to the story's source in the toolbar. Initialized with this [template](https://github.com/storybookjs/addon-kit). There you'll find specifics on development and release inside the `README.md`

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

![Screen Shot 2022-03-23 at 1 15 50 PM](https://user-images.githubusercontent.com/24869532/159789033-8aaa0813-9434-458d-ae2f-c2aae36da426.png)

If an inactive source link is clicked, a tool-top will remind the user of this usage.