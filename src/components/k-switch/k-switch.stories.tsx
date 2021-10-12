import React from 'react';
import { KSwitch } from '../../../component-library-react/src/components';

export default {
  title: 'Components/Switch',
  component: 'k-switch'
};

const Template = (props) => (
  <KSwitch {...props}/>
);

export const Switch = Template.bind({});
Switch.args = {
  label: 'Example label',
  disabled: false,
  checked: false
};