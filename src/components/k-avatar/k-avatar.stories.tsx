import React from 'react';
import { KAvatar, KImg } from '../../../component-library-react/src/components';

import './preview.css';

export default {
  title: 'Components/Avatar',
  component: 'k-avatar',
  argDefaults: {
    size: 'small'
  },
  argOptions: {
    size: ['small', 'medium', 'large'],
  },
}

const defImgProps = {
  src: "https://assets.gitlab-static.net/uploads/-/system/user/avatar/3112753/avatar.png?width=90",
  alt: 'the-ksquare-group',
  fit: 'cover'
}

const defImgSmall = {
  ...defImgProps,
  height: '50',
}

const defImgMedium = {
  ...defImgProps,
  height: '80',
}

const defImgLarge = {
  ...defImgProps,
  height: '150',
}

const TemplateAll = (props) => (
  <>
    <div className="container">
      <div className="component">
        <KAvatar size="small">
          <KImg {...defImgSmall}></KImg>
        </KAvatar>
        <p>Small</p>
      </div>
      <div className="component">
        <KAvatar size="medium">
          <KImg {...defImgMedium}></KImg>
        </KAvatar>
        <p>Medium</p>
      </div>
      <div className="component">
        <KAvatar size="large">
          <KImg {...defImgLarge}></KImg>
        </KAvatar>
        <p>Large</p>
      </div>
    </div>
  </>)

const TemplateSmall = (props) => (
<KAvatar {...props}>
  <KImg {...defImgSmall}></KImg>
</KAvatar>)

const TemplateMedium = (props) => (
<KAvatar {...props}>
  <KImg {...defImgMedium}></KImg>
</KAvatar>)

const TemplateLarge = (props) => (
<KAvatar {...props}>
  <KImg {...defImgLarge}></KImg>
</KAvatar>)

export const All = TemplateAll.bind({});

export const Other = TemplateSmall.bind({});

export const Small = TemplateSmall.bind({});
Small.args = {
  size: 'small'
};

export const Medium = TemplateMedium.bind({});
Medium.args = {
  size: 'medium'
};

export const Large = TemplateLarge.bind({});
Large.args = {
  size: 'large'
};