import React from 'react';
import { KDialog, KDialogContent, KDialogHeader, KDialogBody, KDialogActions, KButton } from '../../../component-library-react/src/components';

export default {
  title: 'Components/Dialog',
  component: 'k-dialog-header'
};

const Template = () => (
  <KDialog>
    <KDialogContent>
      <KDialogHeader>
        Dialog Header
      </KDialogHeader>
      <KDialogBody>
        Lorem ipsum dolor sit amet, consectetuer
        adipiscing elit. Aenean commodo ligula eget
        dolor. Aenean massa.
      </KDialogBody>
    </KDialogContent>
    <KDialogActions>
      <KButton color='terciary'>Cancel</KButton>
      <KButton color='terciary'>Accept</KButton>
    </KDialogActions>
  </KDialog>
);

export const Dialog = Template.bind({});