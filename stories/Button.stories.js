import React from 'react';
import { Button } from './Button';
import { ButtonPrimary } from './ButtonPrimary';
import { ButtonSecondary } from './ButtonSecondary';

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    sourceLink: 'Button.js'
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
  sourceLink: 'ButtonPrimary.js'
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
