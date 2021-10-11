import React from 'react';
import { KGrid, KRow, KColumn } from '../../../component-library-react/src/components';

import './preview.css';

export default {
  title: 'Components/Grid',
  component: 'k-grid'
};

const Template = (props) => (
  <KGrid {...props}>
      <KRow>
        <KColumn size='2'>
          <p>Column (size 2)</p>
        </KColumn>
        <KColumn sizesm='3'>
          <p>Column (sizeSm 3)</p>
        </KColumn>
        <KColumn sizemd='5' sizelg='7'>
          <p>Column (sizeMd 5, sizeLg 7)</p>
        </KColumn>
        <KColumn sizemd='6'>
          <p>Column (sizeMd 6)</p>
        </KColumn>
      </KRow>

      <KRow spacing="sm">
        <KColumn size='1'>
          <p>Column (size 1)</p>
        </KColumn>
        <KColumn size='1'>
          <p>Column (size 1)</p>
        </KColumn>
        <KColumn size='1'>
          <p>Column (size 1)</p>
        </KColumn>
        <KColumn size='1'>
          <p>Column (size 1)</p>
        </KColumn>
        <KColumn size='1'>
          <p>Column (size 1)</p>
        </KColumn>
        <KColumn size='1'>
          <p>Column (size 1)</p>
        </KColumn>
        <KColumn size='1'>
          <p>Column (size 1)</p>
        </KColumn>
        <KColumn size='1'>
          <p>Column (size 1)</p>
        </KColumn>
        <KColumn size='1'>
          <p>Column (size 1)</p>
        </KColumn>
        <KColumn size='1'>
          <p>Column (size 1)</p>
        </KColumn>
        <KColumn size='1'>
          <p>Column (size 1)</p>
        </KColumn>
        <KColumn size='1'>
          <p>Column (size 1)</p>
        </KColumn>
      </KRow>
  </KGrid>
);

export const Grid = Template.bind({});