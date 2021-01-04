import React, {useState} from "../../web_modules/react.js";
import ReactDOM from "../../web_modules/react-dom.js";
import Icon from "../../src/react/Icon.js";
import iconList from "../../lib/icon-list.json.proxy.js";
import "../../styles/seti.css.proxy.js";
function ExampleIcon() {
  console.log("Icon list", iconList);
  const [icon, setIcon] = useState("html");
  function onInputChange(e) {
    console.log("onInputChange", e.target.value);
  }
  return /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("h1", null, "React Icon Conponent"), /* @__PURE__ */ React.createElement("input", {
    onChange: onInputChange,
    value: icon
  }), /* @__PURE__ */ React.createElement(Icon, {
    icon,
    className: "",
    wrapper: false,
    wrapperClass: null,
    wrapperType: "span"
  }));
}
const root = document.getElementById("seti-react");
ReactDOM.render(/* @__PURE__ */ React.createElement(ExampleIcon, null), root);
//# sourceMappingURL=index.js.map
