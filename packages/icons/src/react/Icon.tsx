// Third-Party
import PropTypes from 'prop-types';
import React from 'react';

// Lib files
// import iconList from '../lib/icon-list.json';
import config from '@setitheme/core';


export interface IconProps {
  icon: string,
  ariaHidden?: boolean,
  className?: string,
  color?: string,
  focusable?: string,
  label?: string,
  wrapper?: boolean,
  wrapperClass?: string,
  wrapperType?: string
}

function Icon({
  icon,
  color = 'black',
  ariaHidden = false,
  label = null,
  className = '',
  focusable = 'false',
  wrapper = false,
  wrapperClass = null,
  wrapperType = 'span'
}: IconProps) {

  console.log('colors', config.colors);


  let title = null;

  if (!label && !ariaHidden) label = `${icon} icon`;
  if (!label && title) title = `${icon} icon`;

  let renderedIcon = (
    <i
      className={`${className} seti-icons seti-icons-${icon} seti-icons-${color}`}
      aria-hidden={ariaHidden}
      aria-label={label}
      title={title}
    ></i>
  );

  if (wrapper) {
    renderedIcon = React.createElement(
      wrapperType,
      {
        className: wrapperClass,
        focusable: focusable
      },
      renderedIcon
    );
  }

  return renderedIcon
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  ariaHidden: PropTypes.bool,
  label: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  focusable: PropTypes.string,
  wrapper: PropTypes.bool,
  wrapperClass: PropTypes.string,
  wrapperType: PropTypes.string
};

export default Icon;
