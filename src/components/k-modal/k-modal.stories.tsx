import React from 'react';
import { KModal } from '../../../component-library-react/src/components';

export default {
  title: 'Components/Modal',
  component: 'k-modal'
};

const Template = (props) => (
  <KModal {...props}>
    <p style={{color: '#0a0a0a', margin: '1.5em'}}>
      Hello world!
    </p>
  </KModal>
);

export const Modal = Template.bind({});
Modal.args = {
 show: true,
 hideCloseButton: false
};