import React from 'react';
import { KTableRow } from '../../../component-library-react/src/components';

export default {
  title: 'Components/Table',
  component: 'k-table-row'
};

const Template = (props) => (
  <KTableRow {...props}>
    Table Row Content
  </KTableRow>
);

export const TableRow = Template.bind({});
TableRow.args = {
  type: 'default',
};