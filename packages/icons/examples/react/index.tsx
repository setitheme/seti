import React, { useState }    from 'react';
import ReactDOM from 'react-dom';
import Icon from '../../src/react/Icon';

import iconList from '../../lib/icon-list.json';

import './react.css';

function ExampleIcon() {

  console.log('Icon list', iconList);

  const [ icon, setIcon ] = useState('html');

  function onInputChange(e) {
    console.log('onInputChange', e.target.value);
    // setIcon()
  }

  return (
    <section>
      <h3>Generated Icon</h3>
      <input onChange={onInputChange} value={icon} />
      <Icon
        icon={icon}
        className=""
        color="blue"
        wrapper={false}
        wrapperClass={null}
        wrapperType="span"
      />
    </section>
  );
}

const root = document.getElementById('seti-react');
ReactDOM.render(<ExampleIcon />, root);
