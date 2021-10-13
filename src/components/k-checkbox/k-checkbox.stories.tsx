import React from 'react';
import { KCheckbox } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';


export default {
  title: 'Components/Checkbox',
  component: 'k-checkbox'
}

const Template = () => (
  <div className="story-container">
    <h1>Checkbox</h1>
    <hr />
    <KCheckbox>
      Option
    </KCheckbox>
    <CodeViewer>
      {`
  <k-checkbox>
    Option
  </k-checkbox>
      `}
    </CodeViewer>
  </div>
);

export const Checkbox = Template.bind({});

