import React from 'react';
import { KNotificationItem } from '../../../component-library-react/src/components';

export default {
  title: 'Components/Notification',
  component: 'k-notification-item'
};

const Template = (props) => (
  <KNotificationItem {...props} />
);

export const NotificationItem = Template.bind({});
NotificationItem.args = {
  alertColor: '#ffa500',
  label: 'Notification text',
  time: 'Right now',
  isRead: false
}