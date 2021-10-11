import React from 'react';
import { KProgressBar } from '../../../component-library-react/src/components';

export default {
  title: 'Components/ProgressBar',
  component: 'k-progress-bar'
};

const Template = (props) => (
  <KProgressBar {...props}/>
);

export const ProgressBar = Template.bind({});
ProgressBar.args = {
  value: 0
}