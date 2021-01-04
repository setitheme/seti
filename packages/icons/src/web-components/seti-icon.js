class SetiIcon extends HTMLElement {}

if (typeof window !== 'undefined' && typeof window.customElements !== 'undefined') {
  window.customElements.define('seti-icon', SetiIcon);
}
