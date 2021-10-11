import React from 'react';
import { KListItem } from '../../../component-library-react/src/components';

export default {
  title: 'Components/List',
  component: 'k-list-item'
};

const Template = () => (
  <KListItem>
    Item
  </KListItem>
);

export const ListItem = Template.bind({});