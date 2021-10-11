import React from 'react';
import { KButton } from '../../../component-library-react/src/components';

import './preview.css';

export default {
  title: 'Components/Buttons',
  component: 'k-button'
}

const defArgs = {
  color: 'primary',
  size: 'small',
  shape: 'smooth'
}

interface tableProps {
  title: string;
  size: 'small' | 'medium' | 'large';
}

const tableRender = (props: tableProps) => {
  const {
    title,
    size
  } = props;
  
  return (
    <>
      <h1>{title}</h1>
      <table>
        <tr>
          <td>disabled</td>
          <td>
            <p>full</p>
          </td>
          <td>
            <p>round</p>
          </td>
          <td>
            <p>smooth</p>
          </td>
        </tr>
        <tr>
          <td>
            <KButton size={size} shape="full" color="primary" disabled>
              Primary
            </KButton>
          </td>
          <td>
            <KButton size={size} shape="full" color="primary">
              Primary
            </KButton>
          </td>
          <td>
            <KButton size={size} shape="round" color="primary">
              Primary
            </KButton>
          </td>
          <td>
            <KButton size={size} shape="smooth" color="primary">
              Primary
            </KButton>
          </td>
        </tr>
        <tr>
          <td>
            <KButton size={size} shape="full" color="secondary" disabled>
              Secondary
            </KButton>
          </td>
          <td>
            <KButton size={size} shape="full" color="secondary">
              Secondary
            </KButton>
          </td>
          <td>
            <KButton size={size} shape="round" color="secondary">
              Secondary
            </KButton>
          </td>
          <td>
            <KButton size={size} shape="smooth" color="secondary">
              Secondary
            </KButton>
          </td>
        </tr>
        <tr>
          <td>
            <KButton size={size} shape="full" color="terciary" disabled>
              Terciary
            </KButton>
          </td>
          <td>
            <KButton size={size} shape="full" color="terciary">
              Terciary
            </KButton>
          </td>
          <td>
            <KButton size={size} shape="round" color="terciary">
              Terciary
            </KButton>
          </td>
          <td>
            <KButton size={size} shape="smooth" color="terciary">
              Terciary
            </KButton>
          </td>
        </tr>
      </table>
    </>
  );
}

const buttonsTables: tableProps[] = [
  {
    title: 'Small size',
    size: 'small'
  },
  {
    title: 'Medium size',
    size: 'medium'
  },
  {
    title: 'Large size',
    size: 'large'
  }
]

const TemplateAll = (props) => (
  <div className="buttons-container">
    <div className="default">
      <h1>Default button</h1>
      <p>A button takes all width of parent container</p>
      <KButton>
        Default
      </KButton>
    </div>
    <div className="buttons">
      {buttonsTables.map((data) => tableRender(data))}
      
    </div>
  </div>
);

const TemplateDef = () => (
  <div className="button-container">
    <KButton>
    </KButton>
  </div>
);

const Template = (props) => (
  <div className="button-container">
    <KButton {...props}>
      Click me
    </KButton>
  </div>
);

export const All = TemplateAll.bind({});

export const Default = TemplateDef.bind({});

export const Primary = Template.bind({});
Primary.args = { ...defArgs };

export const Secondary = Template.bind({});
Secondary.args = {
  ...defArgs,
  color: 'secondary'
};

export const Terciary = Template.bind({});
Terciary.args = {
  ...defArgs,
  color: 'terciary',
};