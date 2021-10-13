import React from 'react';
import { KBanner } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Banner',
  component: 'k-banner'
}

const defArgs = {
  type: "success",
}

const Template = (props) => (
  <div className="story-container">
    <h1>Banner</h1>
    <hr />
    <div className="story-description">
      <p>
      Banners should be displayed at the top of the screen,
      below a top app bar. They’re persistent and nonmodal, 
      allowing the user to either ignore them or interact
      with them at any time. Only one banner should be shown
      at a time.
      </p>
      <p>
        Default banner type property is <strong>success</strong>
      </p>
    </div>
    <KBanner {...props}>
      Lorem ipsum dolor sit amet, 
      consectetuer adipiscing elit. 
      Aenean commodo ligula eget dolor. 
      Aenean massa. Cum sociis nat.
    </KBanner>
    <CodeViewer>
      {`
  <k-banner>
    <k-banner-text>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis nat.
    </k-banner-text>
  </k-banner>
      `}
    </CodeViewer>
    <h1>Banner: error</h1>
    <hr />
    <KBanner type="error">
      Lorem ipsum dolor sit amet, 
      consectetuer adipiscing elit. 
      Aenean commodo ligula eget dolor. 
      Aenean massa. Cum sociis nat.
    </KBanner>
    <CodeViewer>
      {`
  <k-banner>
    <k-banner-text type="error">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis nat.
    </k-banner-text>
  </k-banner>
      `}
    </CodeViewer>
  </div>
)

export const Banner = Template.bind({});
Banner.args = {...defArgs};
/*
import readme from './readme.md';

export default {
  /**
   * Notes is an optional string which will be displayed in the "Notes"
   * tab for your component. It is recommended to use the generated readme,
   * however any string should suffice. This supports markdown.
   *//*
  notes: readme,

  /**
   * The states array is a list of additional states to display your
   * component. This is kind of a lightweight version of the "chapters".
   * Each state can have a title, description, props and children.
   * A children must have a tag, innerText (it may be an empty string '')
   *//*
  states: [
    {
      title: 'Complete banner structure',
      description:
        ' Note, the knobs only affect the "default" state at the top.',
      children: [
        {
          tag: 'k-banner-text',
          innerText:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis nat.',
          children: []
        }
      ]
    }
  ]
};
*/