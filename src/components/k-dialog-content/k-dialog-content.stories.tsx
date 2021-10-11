import React from 'react';
import { KDialogContent } from '../../../component-library-react/src/components';

export default {
  title: 'Components/Dialog',
  component: 'k-dialog-content'
};

const Template = () => (
  <KDialogContent>
    Some content
  </KDialogContent>
);

export const DialogContent = Template.bind({});