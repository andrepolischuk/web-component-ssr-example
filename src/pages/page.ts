import {LitElement, html, css} from 'lit'
import '../components/link'

class Page extends LitElement {
  static styles  = css`
    h1 {
      font-size: 3.2em;
      line-height: 1.1;
    }

    .read-the-docs {
      color: #888;
    }
  `

  render() {
    return html`
      <h1>Hello!</h1>
      <p class="read-the-docs">
        <x-link href="/counter">Go to counter</x-link>
      </p>
    `
  }
}

customElements.define("x-page", Page);
