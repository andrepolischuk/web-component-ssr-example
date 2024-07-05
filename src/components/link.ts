import {LitElement, html} from 'lit'
import {property} from 'lit/decorators.js'

class Link extends LitElement {
  @property()
  href?: string

  onClick = (event) => {
    event.preventDefault()
    history.pushState(null, '', this.getAttribute("href"))
    window.dispatchEvent(new CustomEvent("navigate"))
  }

  render() {
    return html`
      <a href="${this.href}" @click=${this.onClick}>
        <slot></slot>
      </a>
    `
  }
}

customElements.define("x-link", Link);
