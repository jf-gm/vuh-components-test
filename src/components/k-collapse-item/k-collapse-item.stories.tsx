import React from 'react';
import { KCollapseItem } from '../../../component-library-react/src/components';

export default {
  title: 'Components/Collapsable',
  component: 'k-collapse-item'
};

const Template = (props) => (
  <KCollapseItem {...props}>
    Option
  </KCollapseItem>
);

export const CollapseItem = Template.bind({});
CollapseItem.args = { disabled: false };