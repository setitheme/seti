import config from '@setitheme/core';
import React, { useState }    from 'react';
import ReactDOM from 'react-dom';

import Icon from '../../src/react/Icon';

import iconList from '../../lib/icon-list.json';

import '@styles/seti.scss';

// Remove color keys we don't want
delete config.colors.cyan;
delete config.colors.grey;
delete config.colors.magenta;
delete config.colors.misc;

function ExampleIcon() {

  const [ icon, setIcon ] = useState('react');
  const [ color, setColor ] = useState('blue');

  function onInputChange(e: any) {
    setIcon(e.target.value);
  }
  return (
    <main className="seti-theme-example">

      <header>
        <h1>React Icon Component</h1>
        <p>This is an example of the react icon component.</p>
        <p>Type an icon name in the input below and you'll see it rendered to the right.</p>
      </header>

      <div className="seti-theme-example__inputs">
        <input onChange={onInputChange} value={icon} className='icon-input' />
        <Icon
          icon={icon}
          color={color}
          wrapper={false}
          wrapperClass={null}
          wrapperType="span"
        />
      </div>

      <section className="section">
        <h2>Colors</h2>
        <ul className="seti-theme-example__list">
          {Object.keys(config.colors).map((key, value) => {
            return (
              <li className="seti-theme-example__list-item" key={key}>
                <button className="seti-btn" onClick={() => { setColor(key) }}>
                  {key}
                </button>
              </li>
            )
          })}
        </ul>
      </section>

      <section className="section">
        <h2>Icons</h2>
        <ul className="seti-theme-example__list">
          {Object.keys(iconList).map((key, value) => {
            return (
              <li className="seti-theme-example__list-item" key={key}>
                <button className="seti-btn" onClick={() => { setIcon(key) }}>
                  {key}
                </button>
              </li>
            )
          })}
        </ul>
      </section>
    </main>
  );
}

const root = document.getElementById('seti-react');
ReactDOM.render(<ExampleIcon />, root);
