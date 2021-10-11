import React from 'react';
import { KNotification, KNotificationGroup, KNotificationItem } from '../../../component-library-react/src/components';

export default {
  title: 'Components/Notification',
  component: 'k-notification'
};

const notificationProps = {
  label: 'Course',
  time: '30m ago',
}

const Item = (props) => (
  <KNotificationItem {...notificationProps} {...props}>
    <p>
      You are been assigned to the course 
      <strong>
        “The best Course of the world”
      </strong>
    </p>
  </KNotificationItem>
)

const Template = () => (
  <KNotification notificationCount={2}>
    <KNotificationGroup>
    {Item({
      color: '#ffa500',
      isRead: false
    })}
    {Item({
      color: 'purple',
      isRead: true
    })}
  </KNotificationGroup>
  </KNotification>
);

export const Notification = Template.bind({});