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
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

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
  <div className="story-container">
    <h1>Menu</h1>
    <hr />
    <div className="story-description">
      <p>
      </p>
    </div>
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
    <CodeViewer>
      {`
  <k-menu menu-key="k-menu">
    <k-menu-content>
      <figure>
        <k.img src="https://www.ksquareinc.com/wp-content/uploads/2019/10/Logo.png" height="32"></k.img>
      </figure>
      <div style="display: flex; align-items: center;">
        <k-notification notification-count="6">
          <k-notification-group notification-count="6"></k-notification-group>
        </k-notification>
      </div>
      <k-avatar style="margin: 16px;">
        <k-img alt="Abraham Berzunza" src="https://assets.gitlab-static.net/uploads/-/system/user/avatar/4533028/avatar.png?width=23"></k-img>
      </k-avatar>
    </k-menu-content>
    <k-menu-nav>
      <k-tab>
        <k-tab-item current="true">Tab 1</k-tab-item>
        <k-tab-item current="false">Tab 2</k-tab-item>
        <k-tab-item current="false">Tab 3</k-tab-item>
        <k-tab-item current="false">Tab 4</k-tab-item>
      </k-tab>
    </k-menu-nav>
  </k-menu>
      `}
    </CodeViewer>
  </div>
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