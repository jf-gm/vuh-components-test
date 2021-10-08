import React from 'react';
import { KBannerText } from '../../../component-library-react/src/components';

export default {
  title: 'Components/Banner',
  component: 'k-banner-text'
}

const Template = () => (
  <>
    <KBannerText>
      Hello world
    </KBannerText>
  </>
);


export const BannerText = Template.bind({});