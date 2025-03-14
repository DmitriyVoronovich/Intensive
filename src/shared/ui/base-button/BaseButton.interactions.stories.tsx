import { StoryFn, Meta } from '@storybook/react';
import { BaseButton, Props } from './BaseButton';
import { JSX } from 'react/jsx-runtime';

export default {
  title: 'Components/BaseButton/Interactions',
  component: BaseButton,
  argTypes: {
    onClick: { action: 'clicked' },
    isActive: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<Props> = (args: JSX.IntrinsicAttributes & Props) => (
  <BaseButton {...args} />
);

export const Active = Template.bind({});
Active.args = {
  children: 'Active Button',
  isActive: true,
  buttonCategory: 'general',
};

export const Inactive = Template.bind({});
Inactive.args = {
  children: 'Inactive Button',
  isActive: false,
  buttonCategory: 'general',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Button',
  disabled: true,
  buttonCategory: 'general',
};

export const WithLongText = Template.bind({});
WithLongText.args = {
  children: 'This is a button with very long text content',
  buttonCategory: 'general',
};
