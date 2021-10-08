import React from 'react';
import { KBreadcrumbsItem } from '../../../component-library-react/src/components';

export default {
  title: 'Components/Breadcrumbs',
  component: 'k-breadcrumbs-item'
}

const Template = () => (
  <>
    <KBreadcrumbsItem>
      Item
    </KBreadcrumbsItem>
  </>
);

export const Breadcrumb = Template.bind({});