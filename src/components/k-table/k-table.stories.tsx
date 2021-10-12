import React from 'react';
import {
  KTable,
  KTableRow,
  KTableColumn,
  KTypography,
  KDropdown,
  KDropdownItem,
  KPaginator,
  KTableHeaderColumn
} from '../../../component-library-react/src/components';

export default {
  title: 'Components/Table',
  component: 'k-table'
};

const Template = () => (
  <KTable>
    <KTableRow type="navbar" style={{minHeight: '56px'}}>
      <KTableColumn size="6" style={{height: '100%'}}>
        <KTypography variant="h4" style={{color: 'black'}}>
          Displaying Course Status
        </KTypography>
      </KTableColumn>
      <KTableColumn size="1" style={{height: '100%'}}>
        <KDropdown variant="table" label="Row" style={{height: '100%'}}>
          <KDropdownItem name="opt" value="01">25</KDropdownItem>
          <KDropdownItem name="opt" value="02">50</KDropdownItem>
          <KDropdownItem name="opt" value="03">100</KDropdownItem>
        </KDropdown>
      </KTableColumn>
      <KTableColumn size="3" style={{height: '100%'}}>
        <KPaginator current-page={1} total-pages={17}/>
      </KTableColumn>
    </KTableRow>
    <KTableRow type="header">
      <KTableHeaderColumn size='3' default={true}>
        Hello there
      </KTableHeaderColumn>
      <KTableHeaderColumn size='1' sortable={false}>
        Hello there
      </KTableHeaderColumn>
      <KTableHeaderColumn size='1'>
        Hello there
      </KTableHeaderColumn>
      <KTableHeaderColumn size='1'>
        Hello there
      </KTableHeaderColumn>
      <KTableHeaderColumn size='1'>
        Hello there
      </KTableHeaderColumn>
      <KTableHeaderColumn size='1'>
        Hello there
      </KTableHeaderColumn>
      <KTableHeaderColumn size='1'>
        Hello there
      </KTableHeaderColumn>
      <KTableHeaderColumn size='1'>
        Hello there
      </KTableHeaderColumn>
      <KTableHeaderColumn size='1'>
        Hello there
      </KTableHeaderColumn>
      <KTableHeaderColumn size='1'>
        Hello there
      </KTableHeaderColumn>
    </KTableRow>
    <KTableRow>
      <KTableColumn size='3'>
        General Kenobi
      </KTableColumn>
      <KTableColumn size='1'>
        General Kenobi
      </KTableColumn>
      <KTableColumn size='1'>
        General Kenobi
      </KTableColumn>
      <KTableColumn size='1'>
        General Kenobi
      </KTableColumn>
      <KTableColumn size='1'>
        General Kenobi
      </KTableColumn>
      <KTableColumn size='1'>
        General Kenobi
      </KTableColumn>
      <KTableColumn size='1'>
        General Kenobi
      </KTableColumn>
      <KTableColumn size='1'>
        General Kenobi
      </KTableColumn>
      <KTableColumn size='1'>
        General Kenobi
      </KTableColumn>
      <KTableColumn size='1'>
        General Kenobi
      </KTableColumn>
    </KTableRow>
    <KTableRow>
      <KTableColumn size='3'>
        You are a bold one!
      </KTableColumn>
      <KTableColumn size='1'>
        You are a bold one!
      </KTableColumn>
      <KTableColumn size='1'>
        You are a bold one!
      </KTableColumn>
      <KTableColumn size='1'>
        You are a bold one!
      </KTableColumn>
      <KTableColumn size='1'>
        You are a bold one!
      </KTableColumn>
      <KTableColumn size='1'>
        You are a bold one!
      </KTableColumn>
      <KTableColumn size='1'>
        You are a bold one!
      </KTableColumn>
      <KTableColumn size='1'>
        You are a bold one!
      </KTableColumn>
      <KTableColumn size='1'>
        You are a bold one!
      </KTableColumn>
      <KTableColumn size='1'>
        You are a bold one!
      </KTableColumn>
    </KTableRow>
  </KTable>
);

export const Table = Template.bind({});
