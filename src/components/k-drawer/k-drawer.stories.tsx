import React from 'react';
import { 
  KDrawer,
  KMenu
} from '../../../component-library-react/src/components';

export default {
  title: 'Components/Drawer',
  component: 'k-drawer'
};

const menuArgs = {
  menuKey: 'k-menu',
  hideDrawerXs: false,
  hideDrawerSm: false,
  hideDrawerMd: false,
  hideDrawerLg: false,
  hideDrawerXl: false,
  disableDrawer: false,
}

const Template = (props) => (
  <>
    <KDrawer {...props}/>
    <KMenu {...menuArgs}/>
  </>
);

export const Drawer = Template.bind({});
Drawer.args = {
  forKey: 'k-menu'
}
