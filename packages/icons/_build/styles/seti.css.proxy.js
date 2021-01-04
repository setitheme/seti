// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".seti-theme-black {\n  color: #0e1112;\n}\n.seti-theme-blue {\n  color: #519aba;\n}\n.seti-theme-gray {\n  color: #7494a3;\n}\n.seti-theme-green {\n  color: #8dc149;\n}\n.seti-theme-orange {\n  color: #e37933;\n}\n.seti-theme-pink {\n  color: #f55385;\n}\n.seti-theme-purple {\n  color: #a074c4;\n}\n.seti-theme-red {\n  color: #cc3e44;\n}\n.seti-theme-yellow {\n  color: #cbcb41;\n}\n.seti-theme-white {\n  color: #d4d7d6;\n}\n.seti-theme-bg-black {\n  background-color: #0e1112;\n  color: #d4d7d6;\n}\n.seti-theme-bg-blue {\n  background-color: #519aba;\n  color: #d4d7d6;\n}\n.seti-theme-bg-gray {\n  background-color: #7494a3;\n  color: #d4d7d6;\n}\n.seti-theme-bg-green {\n  background-color: #8dc149;\n  color: #0e1112;\n}\n.seti-theme-bg-orange {\n  background-color: #e37933;\n  color: #d4d7d6;\n}\n.seti-theme-bg-pink {\n  background-color: #f55385;\n  color: #d4d7d6;\n}\n.seti-theme-bg-purple {\n  background-color: #a074c4;\n  color: #d4d7d6;\n}\n.seti-theme-bg-red {\n  background-color: #cc3e44;\n  color: #d4d7d6;\n}\n.seti-theme-bg-yellow {\n  background-color: #cbcb41;\n  color: #0e1112;\n}\n.seti-theme-bg-white {\n  background-color: #d4d7d6;\n  color: #0e1112;\n}\n\n.seti-icons {\n  font-size: 3rem;\n}\n\nhtml, body {\n  background: #0e1112;\n  color: #d4d7d6;\n}\n\ninput {\n  display: block;\n  background: #7494a3;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}