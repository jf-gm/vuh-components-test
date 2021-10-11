import React from 'react';
import { KCarouselItem, KImg } from '../../../component-library-react/src/components';

const imgProps = {
  src: 'https://cdn.pixabay.com/photo/2019/11/03/01/56/landscape-4597742_1280.jpg',
  alt: 'the-ksquare-group',
  height: '300',
  fit: 'cover'
};

export default {
  title: 'Components/Carousel',
  component: 'k-carousel-item'
}

const Template = () => (
  <>
    <p style={{color: '#0a0a0a'}}>Regularly, carousel items are going to be images</p>
    <KCarouselItem>
      <KImg {...imgProps} />
    </KCarouselItem>
  </>
);


export const CarouselItem = Template.bind({});
