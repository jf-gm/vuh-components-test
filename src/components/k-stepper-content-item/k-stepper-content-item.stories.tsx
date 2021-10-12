import React from 'react';
import { KStepperContentItem } from '../../../component-library-react/src/components';

export default {
  title: 'Components/Stepper',
  component: 'k-stepper-content-item'
};

const Template = () => (
  <KStepperContentItem>
    Content Step 1
  </KStepperContentItem>
);

export const StepperContentItem = Template.bind({});