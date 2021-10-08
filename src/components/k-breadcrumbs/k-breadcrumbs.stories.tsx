import React from 'react';
import { KBreadcrumbs, KBreadcrumbsItem } from '../../../component-library-react/src/components';

export default {
  title: 'Components/Breadcrumbs',
  component: 'k-breadcrumbs'
};

const Template = (props) => (
  <>
    <KBreadcrumbs >
      <KBreadcrumbsItem>
        Item 1
      </KBreadcrumbsItem>
      <KBreadcrumbsItem >
        Item 2
      </KBreadcrumbsItem>
      <KBreadcrumbsItem {...props}>
        Item 3
      </KBreadcrumbsItem>
    </KBreadcrumbs>
  </>
);

export const BreadcrumbList = Template.bind({});
BreadcrumbList.args = {
  current: true
};