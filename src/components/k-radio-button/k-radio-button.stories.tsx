import React from 'react';
import { KRadioButton } from '../../../component-library-react/src/components';

export default {
  title: 'Components/RadioButton',
  component: 'k-radio-button'
};

const Template = (props) => (
  <KRadioButton {...props}>
    Option
  </KRadioButton>
);

export const RadioButton = Template.bind({});
RadioButton.args = {
  name: 'option',
  value: 'A',
  disabled: false,
  checked: false
};