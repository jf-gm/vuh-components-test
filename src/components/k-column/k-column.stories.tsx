import React from 'react';
import { KColumn } from '../../../component-library-react/src/components';

export default {
  title: 'Components/Grid',
  component: 'k-column'
}

const Template = (props) => (
  <KColumn {...props}>
      Column content
  </KColumn>
);

export const Column = Template.bind({});