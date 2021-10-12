import React from 'react';
import { KTextField } from '../../../component-library-react/src/components';

export default {
  title: 'Components/Text Field',
  component: 'k-text-field'
};

const Template = (props) => (
  <KTextField {...props}>
    Courses
  </KTextField>
);

export const TextField = Template.bind({});
TextField.args = {
  label: 'Description',
  value: '',
  disabled: false,
  validationState: '',
  name: '',
  helperText: '',
  maxLength: 0,
  minLength: 0,
}