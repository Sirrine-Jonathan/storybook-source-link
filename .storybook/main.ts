import { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig =  {
  stories: [
    "../stories/**/*.stories.js",
  ],

  addons: ["../preset.js", "@storybook/addon-essentials", "@storybook/components", "@storybook/manager-api", "@storybook/preview-api"],

  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },

  docs: {
    autodocs: 'tag'
  },

  webpackFinal: async (config, { configType }) => {
    config.devtool = 'inline-source-map'
    return config;
  },
};

export default config;
