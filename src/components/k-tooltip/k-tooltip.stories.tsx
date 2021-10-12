import React from 'react';
import { KTooltip } from '../../../component-library-react/src/components';

export default {
  title: 'Components/Tooltip',
  component: 'k-tooltip'
};

const Template = (props) => (
  <KTooltip {...props}>
    Hover me!
  </KTooltip>
);

export const Tooltip = Template.bind({});
Tooltip.args = {
  text: 'Hello world!',
  position: 'bottom'
}