import React from 'react';
import { Button } from './Button';
import { ButtonPrimary } from './ButtonPrimary';
import { ButtonSecondary } from './ButtonSecondary';

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    sourceLink: 'https://github.com/Sirrine-Jonathan/storybook-source-link/blob/main/stories/Button.js'
  }
};

export const Default = ({...args}) => <Button {...args} />
Default.args = {
  label: 'Default'
}
export const Primary = ({...args}) => <ButtonPrimary {...args} />
Primary.args = {
  label: 'Primary'
}
Primary.argTypes = {
  mode: {
    table: {
      disable: true
    }
  }
}
Primary.parameters = {
  sourceLink: 'https://github.com/Sirrine-Jonathan/storybook-source-link/blob/main/stories/ButtonPrimary.js'
}
export const Secondary = ({...args}) => <ButtonSecondary {...args}/>
Secondary.args = {
  label: 'Secondary'
}
Secondary.argTypes = {
  mode: {
    table: {
      disable: true
    }
  }
}
Secondary.parameters = {
  sourceLink: 'https://github.com/Sirrine-Jonathan/storybook-source-link/blob/main/stories/ButtonSecondary.js'
}
