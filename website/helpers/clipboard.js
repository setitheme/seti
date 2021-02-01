export default class Clipboard {
  constructor() {
    this.isClipboardEnabled = false;
    this.checkAvailability();
  }

  async checkAvailability() {
    if (typeof navigator !== 'undefined') {
      const result = await navigator.permissions.query({ name: 'clipboard-write' });
      if (result.state == 'granted' || result.state == 'prompt') {
        this.isClipboardEnabled = true;
      }
    }
    return this.isClipboardEnabled;
  }

  async copy(value) {
    let success = false;

    if (this.isClipboardEnabled) {
      const copyResult = await navigator.clipboard.writeText(value);
      console.log('copyResult', {
        copyResult,
        value,
      });
      success = true;
    }

    return success;
  }
}
