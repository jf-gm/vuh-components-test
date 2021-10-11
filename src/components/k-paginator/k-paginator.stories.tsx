import React from 'react';
import { KPaginator } from '../../../component-library-react/src/components';

export default {
  title: 'Components/Paginator',
  component: 'k-paginator'
};

const Template = (props) => (
  <KPaginator {...props} />
);

export const Paginator = Template.bind({});
Paginator.args = {
 totalPages: 10,
 currentPage: 1
};