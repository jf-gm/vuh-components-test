import React from 'react';
import { KRow } from '../../../component-library-react/src/components';

export default {
  title: 'Components/Grid',
  component: 'k-row'
}

const Template = (props) => (
  <KRow {...props}>
    Row Content
  </KRow>
);

export const Row = Template.bind({});