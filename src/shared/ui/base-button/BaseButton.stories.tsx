import { StoryFn, Meta } from '@storybook/react';
import { BaseButton, Props } from './BaseButton';
import { JSX } from 'react/jsx-runtime';

export default {
  title: 'Components/BaseButton',
  component: BaseButton,
  argTypes: {
    buttonCategory: {
      control: {
        type: 'select',
        options: ['general', 'favorite', 'submit', 'table', 'default'],
      },
    },
    children: { control: 'text' },
    isActive: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<Props> = (args: JSX.IntrinsicAttributes & Props) => (
  <BaseButton {...args} />
);

export const General = Template.bind({});
General.args = {
  buttonCategory: 'general',
  children: 'General Button',
};

export const Favorite = Template.bind({});
Favorite.args = {
  buttonCategory: 'favorite',
  children: 'Favorite',
};

export const Submit = Template.bind({});
Submit.args = {
  buttonCategory: 'submit',
  children: 'Submit',
};

export const Table = Template.bind({});
Table.args = {
  buttonCategory: 'table',
  children: 'Table Button',
};

export const Default = Template.bind({});
Default.args = {
  buttonCategory: 'default',
  children: 'Default Button',
};
