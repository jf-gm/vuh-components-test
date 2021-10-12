import React from 'react';
import {
  KMenu,
  KMenuContent,
  KImg,
  KNotification,
  KNotificationGroup,
  KAvatar,
  KMenuNav,
  KTab,
  KTabItem,
  KDrawer
} from '../../../component-library-react/src/components';

export default {
  title: 'Components/Menu',
  component: 'k-menu'
};

const imgFigureProps = {
  src: "https://www.ksquareinc.com/wp-content/uploads/2019/10/Logo.png",
  height: 32
}

const imgProps = {
  src: "https://assets.gitlab-static.net/uploads/-/system/user/avatar/4533028/avatar.png?width=23",
}

const Template = (props) => (
  <>
    <KDrawer forKey='k-menu'/>
    <KMenu {...props}>
      <KMenuContent>
        <figure>
          <KImg {...imgFigureProps} />
        </figure>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <KNotification>
            <KNotificationGroup />
          </KNotification>
        </div>
        <KAvatar>
          <KImg {...imgProps} />
        </KAvatar>
      </KMenuContent>
      <KMenuNav>
        <KTab>
          <KTabItem current={true}>
            Tab 1
          </KTabItem>
          <KTabItem>
            Tab 2
          </KTabItem>
          <KTabItem>
            Tab 3
          </KTabItem>
          <KTabItem>
            Tab 4
          </KTabItem>
        </KTab>
      </KMenuNav>
    </KMenu>
  </>
);

export const Menu = Template.bind({});
Menu.args = {
  menuKey: 'k-menu',
  hideDrawerXs: false,
  hideDrawerSm: false,
  hideDrawerMd: false,
  hideDrawerLg: false,
  hideDrawerXl: false,
  disableDrawer: false,
}