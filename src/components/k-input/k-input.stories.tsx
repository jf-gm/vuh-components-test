import React from 'react';
import { KInput } from '../../../component-library-react/src/components';

export default {
  title: 'Components/Input',
  component: 'k-input'
};

const Template = (props) => (
  <KInput {...props}>
  </KInput>
);

export const Input = Template.bind({});
Input.args = {
  type: 'text',
  label: 'Firstname',
  value: 'Elliot Alderson',
  disabled: false,
  validationState: '',
  name: 'firstname',
  helperText: 'Example label',
  maxLength: 0,
  minLength: 0
};