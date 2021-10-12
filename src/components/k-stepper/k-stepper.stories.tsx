import React from 'react';
import { KStepper, KStepperHeader, KStepperHeaderItem, KStepperContent, KStepperContentItem, } from '../../../component-library-react/src/components';

import './preview.css';

export default {
  title: 'Components/Stepper',
  component: 'k-stepper'
};

const Template = () => (
  <KStepper>
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
  </KStepper>
);

export const Stepper = Template.bind({});
