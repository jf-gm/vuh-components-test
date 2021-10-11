import React from 'react';
import { KCollapseMenu, KCollapseParent, KCollapseList, KCollapseItem } from '../../../component-library-react/src/components';

export default {
  title: 'Components/Collapsable',
  component: 'k-collapse-menu'
}

const Template = () => (
  <KCollapseMenu>
    <KCollapseParent>
      See options
    </KCollapseParent>
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
      <KCollapseItem disabled={true}>
        Option 4 (disabled)
      </KCollapseItem>
    </KCollapseList>
  </KCollapseMenu>
);

export const CollapseMenu = Template.bind({});