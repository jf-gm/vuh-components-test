import React from 'react';
import { KStepperContent, KStepperContentItem } from '../../../component-library-react/src/components';

export default {
  title: 'Components/Stepper',
  component: 'k-stepper-content'
};

const Template = () => (
  <KStepperContent>
    <KStepperContentItem>
      Content Step 1
    </KStepperContentItem>
    <KStepperContentItem>
      Content Step 2
    </KStepperContentItem>
    <KStepperContentItem>
      Content Step 3
    </KStepperContentItem>
  </KStepperContent>
);

export const StepperContent = Template.bind({});
