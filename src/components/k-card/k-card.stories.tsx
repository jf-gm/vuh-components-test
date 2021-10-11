import React from 'react';
import { KCard, KImg } from '../../../component-library-react/src/components';

export default {
  title: 'Components/Card',
  component: 'k-card'
}

const imgProps = {
  src: 'https://cdn.pixabay.com/photo/2017/08/10/08/47/code-2620118_1280.jpg',
  alt: 'the-ksquare-group',
  height: '300',
  fit: 'cover'
};

const Template = () => (
  <KCard>
    <KImg {...imgProps}></KImg>
    <div style={{padding: '16px'}}>
      <h1>Card Title</h1>
      <p style={{color: '#0a0a0a'}}>
        Lorem ipsum dolor sit amet, consectetuer
        adipiscing elit.
      </p>
    </div>
  </KCard>
);

export const Card = Template.bind({});
