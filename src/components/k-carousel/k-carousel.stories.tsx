import React from 'react';
import { KCarousel, KCarouselItem, KImg } from '../../../component-library-react/src/components';

export default {
  title: 'Components/Carousel',
  component: 'k-carousel'
}

interface imgProps {
  src: string;
  height: string;
}

const itemsList: imgProps[] = [
  {
    src: 'https://cdn.pixabay.com/photo/2019/11/03/01/56/landscape-4597742_1280.jpg',
    height: '300',
    fit: 'cover'
  },
  {
    src: 'https://cdn.pixabay.com/photo/2020/07/09/10/31/sea-5386810_1280.jpg',
    height: '300',
    fit: 'cover'
  },
  {
    src: 'https://cdn.pixabay.com/photo/2019/11/03/01/56/landscape-4597742_1280.jpg',
    height: '300',
    fit: 'cover'
  },
  {
    src: 'https://cdn.pixabay.com/photo/2020/07/09/10/31/sea-5386810_1280.jpg',
    height: '300',
    fit: 'cover'
  }
]

const renderItems = (props: imgProps) => (
  <KCarouselItem>
    <KImg {...props} />
  </KCarouselItem>
)

const Template = (props) => (
  <KCarousel {...props}>
    {itemsList.map((data: imgProps) => renderItems(data))}
  </KCarousel>
);

export const Carousel = Template.bind({});
Carousel.args = {
  showDots: true
}