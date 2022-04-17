# Storybook Addon Source Link
![npm](https://img.shields.io/npm/v/storybook-source-link) ![npm](https://img.shields.io/npm/dw/storybook-source-link)

Provides a link to the story's source in the toolbar.

## Usage

Inside each component, include a parameter for your components's source code.

`*.stories.js`

```
export default {
  title: 'Example',
  component: Button,
  parameters: {
    sourceLink: '<link to source>'
  }
};
```

This can be done at the story level as well

`*.stories.js`

```
export const Primary = () => (
  <Button>Primary</Button>
);
Primary.parameters = {
  sourceLink: '<link to source>'
};
```

If the parameter is set, clicking the icon button will take you to the source link.

![Screen Shot 2022-03-23 at 1 15 50 PM](https://user-images.githubusercontent.com/24869532/159789033-8aaa0813-9434-458d-ae2f-c2aae36da426.png)

If an inactive source link is clicked, a tool-top will remind the user of this usage.

Alternatively, you may set a global parameter to define a default link in the `.storybook/preview.js` file like so:

```
export const parameters = {
  sourceLink: '<link to source>'
}
```

Precedence follows the [rules of parameter inheritance](https://storybook.js.org/docs/react/writing-stories/parameters#rules-of-parameter-inheritance)
