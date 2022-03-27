# Storybook Addon Source Link

Provides a link to the story's source in the toolbar.

## Usage

Inside each story, include a parameter for your story's source code. 

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

If the parameter is set, clicking the icon button will take you to the source link.

![Screen Shot 2022-03-23 at 1 15 50 PM](https://user-images.githubusercontent.com/24869532/159789033-8aaa0813-9434-458d-ae2f-c2aae36da426.png)

If an inactive source link is clicked, a tool-top will remind the user of this usage.

Alternatively, you may set a default link in the `.storybook/preview.js` file like so:

```
export const parameters = {
  defaultSourceLink: '<link to source>'
}
```
