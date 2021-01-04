import PropTypes from "../../web_modules/prop-types.js";
import React from "../../web_modules/react.js";
import {SetiIcons} from "../../lib/icon-list.js";
import config from "../../web_modules/@setitheme/core.js";
console.log("iconList", SetiIcons);
console.log("config", config);
function Icon({
  icon,
  color = "black",
  ariaHidden = false,
  label = null,
  className = "",
  focusable = "false",
  title = null,
  wrapper = false,
  wrapperClass = null,
  wrapperType = "span"
}) {
  if (!label && !ariaHidden)
    label = `${icon} icon`;
  if (!label && title)
    title = `${icon} icon`;
  let renderedIcon = /* @__PURE__ */ React.createElement("i", {
    className: `${className} seti-icons seti-icons-${icon} seti-icons-${color}`,
    "aria-hidden": ariaHidden,
    "aria-label": label,
    title,
    style: {
      color: config.colors[color].hex.base
    }
  });
  if (wrapper) {
    renderedIcon = React.createElement(wrapperType, {
      className: wrapperClass,
      focusable
    }, renderedIcon);
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
  wrapperType: PropTypes.string
};
export default Icon;
//# sourceMappingURL=Icon.js.map
