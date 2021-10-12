import React from 'react';
import { KSnackbar } from '../../../component-library-react/src/components';

export default {
  title: 'Components/Snackbar',
  component: 'k-snackbar'
};

const Template = (props) => (
  <KSnackbar {...props}/>
);

export const Snackbar = Template.bind({});
Snackbar.args = {
  text: 'Sample text'
};