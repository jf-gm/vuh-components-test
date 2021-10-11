import React from 'react';
import { KRadioButtonGroup, KRadioButton } from '../../../component-library-react/src/components';

import './preview.css';

export default {
  title: 'Components/RadioButton',
  component: 'k-radio-button-group'
};

const radioProps = {
  name: 'option',
  disabled: false,
  checked: false
}

const Template = (props) => (
  <KRadioButtonGroup {...props}>
    <KRadioButton {...radioProps} value='A'>
      A
    </KRadioButton>
    <br />
    <KRadioButton {...radioProps} value='B'>
      B
    </KRadioButton>
    <br />
    <KRadioButton {...radioProps} value='C'>
      C
    </KRadioButton>
  </KRadioButtonGroup>
);

export const RadioButtonGroup = Template.bind({});
