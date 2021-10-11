import React from 'react';
import { KCollapseList, KCollapseItem } from '../../../component-library-react/src/components';

export default {
  title: 'Components/Collapsable',
  component: 'k-collapse-list'
}

const Template = () => (
  <KCollapseList>
    <KCollapseItem>
      Option 1
    </KCollapseItem>
    <KCollapseItem>
      Option 2
    </KCollapseItem>
    <KCollapseItem>
      Option 3
    </KCollapseItem>
  </KCollapseList>
);

export const CollapseList = Template.bind({});