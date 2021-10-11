import React from 'react';
import { KDialogBody } from '../../../component-library-react/src/components';

export default {
  title: 'Components/Dialog',
  component: 'k-dialog-body'
};

const Template = () => (
  <KDialogBody>
    Some content
  </KDialogBody>
);

export const DialogBody = Template.bind({});