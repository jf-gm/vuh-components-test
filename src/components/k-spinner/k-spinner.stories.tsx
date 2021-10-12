import React from 'react';
import { KSpinner } from '../../../component-library-react/src/components';

export default {
  title: 'Components/Spinner',
  component: 'k-spinner'
};

const Template = (props) => (
  <KSpinner {...props}/>
);

export const Spinner = Template.bind({});
Spinner.args = {
  size: 50,
  strong: 6,
  color: 'primary'
};