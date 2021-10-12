import React from 'react';
import { KSearchBar } from '../../../component-library-react/src/components';

export default {
  title: 'Components/Search Bar',
  component: 'k-search-bar'
};

const Template = (props) => (
  <KSearchBar {...props}/>
);

export const SearchBar = Template.bind({});
SearchBar.args = {
  type: 'solid',
  value: '',
  disabled: false,
  name: 'courses-search',
  placeholder: 'Search',
  maxLength: 0,
  minLength: 0
};