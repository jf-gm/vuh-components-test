import React from 'react';
import { KImg } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Image',
  component: 'k-img',
};

const defaultArgs = {
  src: 'https://media-exp1.licdn.com/dms/image/C4E1BAQGOhOLNnmDazw/company-background_10000/0?e=2159024400&v=beta&t=FLPdAgxuIRlNgMSoohrTA6Meg5SzkPIuNV_qauRDP0Q',
  alt: 'the-ksquare-group',
  height: '300',
  fit: 'cover'
};

const Template = (props) => (
  <div className="story-container">
    <h1>Image</h1>
    <hr />
    <KImg {...props} />
    <CodeViewer>
      {`
  <k-img
    src="https://media-exp1.licdn.com/dms/image/C4E1BAQGOhOLNnmDazw/company-background_10000/0?e=2159024400&v=beta&t=FLPdAgxuIRlNgMSoohrTA6Meg5SzkPIuNV_qauRDP0Q"
    alt="the-ksquare-group"
    height="300"
    fit="cover"
  >
  </k-img>
      `}
    </CodeViewer>
  </div>
);

export const Image = Template.bind({});
Image.args = {...defaultArgs};