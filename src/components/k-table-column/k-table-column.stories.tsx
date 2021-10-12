import React from 'react';
import { KTableColumn } from '../../../component-library-react/src/components';

export default {
  title: 'Components/Table',
  component: 'k-table-column'
};

const Template = (props) => (
  <KTableColumn {...props}>
    Column content
  </KTableColumn>
);

export const TableColumn = Template.bind({});
TableColumn.args = {
  size: '1'
};