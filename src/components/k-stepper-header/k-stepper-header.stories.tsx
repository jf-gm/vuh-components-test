import React from 'react';
import { KStepperHeader, KStepperHeaderItem } from '../../../component-library-react/src/components';

export default {
  title: 'Components/Stepper',
  component: 'k-stepper-header'
};

const Template = () => (
  <KStepperHeader>
    <KStepperHeaderItem done={true}>
      Step 1
    </KStepperHeaderItem>
    <KStepperHeaderItem started={true}>
      Step 2
    </KStepperHeaderItem>
    <KStepperHeaderItem>
      Step 3
    </KStepperHeaderItem>
  </KStepperHeader>
);

export const StepperHeader = Template.bind({});