import React, { useState } from 'react';
import { h } from '@stencil/core';

const textOptions = {
  view: 'View Code',
  hide: 'Hide Code'
}

const componentName = ({children}) => {

  const [textOption, setTextOption] = useState(-1);

  const codeButtonHanlder = () => {
    if(textOption) {
      setTextOption(0);
    } else {
      setTextOption(1);
    }
  }
  return (
    <div className="code-container">
      <button onClick={codeButtonHanlder}>
        {textOption || textOption === -1 ? textOptions.view : textOptions.hide}
      </button>
      <pre className={textOption === -1 ? '' : (textOption ? 'hide' : 'show')}>
      <code>
        {children}
      </code>
      </pre>
    </div>
  );
};

export default componentName;