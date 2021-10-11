import React from 'react';
import { KElevation } from '../../../component-library-react/src/components';

import './preview.css';

export default {
  title: 'Components/Elevation',
  component: 'k-elevation'
};

const Template = (props) => (
  <KElevation {...props}>
    <div>
      Elevation
    </div>
  </KElevation>
);

export const Elevation = Template.bind({});
Elevation.args = { radius: '50%' };