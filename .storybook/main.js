module.exports = {
  stories: [
    "../stories/**/*.stories.js",
  ],

  addons: ["../preset.js", "@storybook/addon-essentials"],

  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },

  docs: {
    autodocs: true
  }
};
