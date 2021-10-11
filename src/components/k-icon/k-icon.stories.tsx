import React from 'react';
import { KIcon } from '../../../component-library-react/src/components';

export default {
  title: 'Components/Icon',
  component: 'k-icon'
};

const Template = (props) => (
  <KIcon {...props}>
  </KIcon>
);

export const Icon = Template.bind({});
Icon.args = {
  size: 'small',
  name: 'alert-circle'
};