import React from 'react';
import { KCollapseParent } from '../../../component-library-react/src/components';

export default {
  title: 'Components/Collapsable',
  component: 'k-collapse-parent'
}

const Template = () => (
  <KCollapseParent>
    Some text...
  </KCollapseParent>
);

export const CollapseParent = Template.bind({});