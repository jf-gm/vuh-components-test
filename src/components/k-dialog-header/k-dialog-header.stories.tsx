import React from 'react';
import { KDialogHeader } from '../../../component-library-react/src/components';

export default {
  title: 'Components/Dialog',
  component: 'k-dialog-header'
};

const Template = () => (
  <KDialogHeader>
    Some content
  </KDialogHeader>
);

export const DialogHeader = Template.bind({});