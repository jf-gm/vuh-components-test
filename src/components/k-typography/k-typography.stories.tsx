import React from 'react';
import { KTypography } from '../../../component-library-react/src/components';

export default {
  title: 'Components/Typography',
  component: 'k-typography'
};

const Template = (props) => (
  <KTypography {...props}>
    Hello world!
  </KTypography>
);

export const Typography = Template.bind({});
Typography.args = {
  variant: 'h1',
  color: 'primary800'
};