import React from 'react';
import { KStepperHeaderItem } from '../../../component-library-react/src/components';

export default {
  title: 'Components/Stepper',
  component: 'k-stepper-header-item'
};

const Template = (props) => (
  <KStepperHeaderItem {...props}>
    Step 1
  </KStepperHeaderItem>
);

export const StepperHeaderItem = Template.bind({});
StepperHeaderItem.args = {
  done: false,
  started: false
};