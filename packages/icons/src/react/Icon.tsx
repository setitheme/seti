// Third-Party
import config from '@setitheme/core';
import PropTypes from 'prop-types';
import React from 'react';

import { IconProps } from './Icon.types';

function Icon({
  icon,
  color = 'white',
  ariaHidden = false,
  label = null,
  className = '',
  focusable = 'false',
  title = null,
  wrapper = false,
  wrapperClass = null,
  wrapperType = 'span',
}: IconProps) {
  if (!label && !ariaHidden) label = `${icon} icon`;
  if (!label && title) title = `${icon} icon`;

  let renderedIcon = (
    <i
      className={`${className} seti-icons seti-icons-${icon} seti-icons-${color}`}
      aria-hidden={ariaHidden}
      aria-label={label}
      title={title}
      style={{
        color: config.colors[color].hex.base,
      }}
    ></i>
  );

  if (wrapper) {
    renderedIcon = React.createElement(
      wrapperType,
      {
        className: wrapperClass,
        focusable: focusable,
      },
      renderedIcon
    );
  }

  return renderedIcon;
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  ariaHidden: PropTypes.bool,
  label: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  focusable: PropTypes.string,
  title: PropTypes.string,
  wrapper: PropTypes.bool,
  wrapperClass: PropTypes.string,
  wrapperType: PropTypes.string,
};

export default Icon;
