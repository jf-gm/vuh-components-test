import React from 'react';
import { KIcon } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Icon',
  component: 'k-icon'
};

const Template = (props) => (
  <div className="story-container">
    <h1>Icon</h1>
    <hr />
    <div className="story-description">
      <p>
        System icons are displayed as 24 x 24 dp.
        Create icons for viewing at 100% scale for
        pixel-perfect accuracy.
      </p>
    </div>
    <KIcon {...props}>
    </KIcon>
    <CodeViewer>
      {`
  <k-icon size="small" name="alert-circle">
  </k-icon>
      `}
    </CodeViewer>
  </div>
);

export const Icon = Template.bind({});
Icon.args = {
  size: 'small',
  name: 'alert-circle'
};