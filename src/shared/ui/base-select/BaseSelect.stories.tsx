import { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { BaseSelect, Props } from './BaseSelect';

export default {
  title: 'Components/BaseSelect',
  component: BaseSelect,
  argTypes: {
    placeholder: { control: 'text' },
    options: { control: 'object' },
    onChange: { action: 'changed' },
  },
} as Meta;

const Template: StoryFn<Props> = (args) => {
  const [value, setValue] = useState<number[]>(args.value || []);
  return (
    <BaseSelect
      {...args}
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
        args.onChange(newValue);
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Select options',
  options: [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
    { value: 3, label: 'Option 3' },
  ],
  value: [],
};

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  ...Default.args,
  defaultValue: [1],
  value: [1],
};

export const ManyOptions = Template.bind({});
ManyOptions.args = {
  ...Default.args,
  options: Array.from({ length: 20 }, (_, i) => ({
    value: i + 1,
    label: `Option ${i + 1}`,
  })),
};

export const CustomPlaceholder = Template.bind({});
CustomPlaceholder.args = {
  ...Default.args,
  placeholder: 'Choose your favorite options',
};
