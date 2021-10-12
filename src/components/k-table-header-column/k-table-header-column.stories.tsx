import React from 'react';
import { KTableHeaderColumn } from '../../../component-library-react/src/components';

export default {
  title: 'Components/Table',
  component: 'k-table-header-column'
};

const Template = (props) => (
  <KTableHeaderColumn {...props}>
    Header Column Content
  </KTableHeaderColumn>
);

export const TableHeaderColumn = Template.bind({});
TableHeaderColumn.args = {
  size: '1',
  disabled: false,
  sortable: true,
  default: false,
  active: false
};