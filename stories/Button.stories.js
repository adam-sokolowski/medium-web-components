import { ButtonPage } from './ButtonPage';

export default {
  title: 'Button',
  argTypes: {
    loading: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

const Button = (args) => ButtonPage(args);

export const WebComponent = Button.bind({});