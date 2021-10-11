import React from 'react';
import { KListGroup, KListItem } from '../../../component-library-react/src/components';

export default {
  title: 'Components/List',
  component: 'k-list-group'
};

const Template = () => (
  <KListGroup>
    <KListItem>
      Home
    </KListItem>
    <KListItem>
      Courses
    </KListItem>
    <KListItem>
      Learning plan
    </KListItem>
  </KListGroup>
);

export const ListGroup = Template.bind({});