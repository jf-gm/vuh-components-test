import React from 'react';
import { KDropdown, KDropdownItem } from '../../../component-library-react/src/components';

export default {
  title: 'Components/Dropdown',
  component: 'k-dropdown-item'
};

const Template = (props) => (
  <KDropdown {...props}>
    <KDropdownItem name="op0" value="00">
      Select yout option
    </KDropdownItem>
    <KDropdownItem name="op1" value="01">
      Option 1
    </KDropdownItem>
    <KDropdownItem name="op2" value="02">
      Option 2
    </KDropdownItem>
    <KDropdownItem name="op3" value="03">
      Option 3
    </KDropdownItem>
  </KDropdown>
);

export const Dropdown = Template.bind({});
Dropdown.args = {
  disabled: false,
  variant: 'button',
  color: 'primary',
  validationState: '',
  label: '',
  helperText: 'Example label'
};