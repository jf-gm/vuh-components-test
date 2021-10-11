import React from 'react';
import { KTab, KTabItem } from '../../../component-library-react/src/components';

export default {
  title: 'Components/Tab',
  component: 'k-tab'
};

const Template = () => (
  <KTab>
    <KTabItem current={true}>
      Tab 1
    </KTabItem>
    <KTabItem>
      Tab 2
    </KTabItem>
    <KTabItem>
      Tab 3
    </KTabItem>
    <KTabItem>
      Tab 4
    </KTabItem>
  </KTab>
);

export const Tab = Template.bind({});