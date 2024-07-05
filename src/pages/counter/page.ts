import {LitElement, html, css} from 'lit'
import '../../components/counter'
import '../../components/link'

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
      <h1>Counter!</h1>
      <x-counter></x-counter>
      <p class="read-the-docs">
        <x-link href="/">Go to main</x-link>
      </p>
    `
  }
}

customElements.define("x-page-counter", Page);
