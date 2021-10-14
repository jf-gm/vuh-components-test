import React from 'react';
import { KLabel } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Label',
  component: 'k-label'
};

const Template = () => (
  <div className="story-container">
    <h1>Label</h1>
    <hr />
    <KLabel>
      Text example
    </KLabel>
    <CodeViewer>
      {`
  <k-label>
    Text example
  </k-label>
      `}
    </CodeViewer>
  </div>
);

export const Label = Template.bind({});