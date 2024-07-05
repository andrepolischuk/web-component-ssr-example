import {LitElement, html, css} from 'lit'
import {state} from 'lit/decorators.js'

class Counter extends LitElement {
  static styles = css`
    .card {
      padding: 2em;
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:hover {
      border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    @media (prefers-color-scheme: light) {
      button {
        background-color: #f9f9f9;
      }
    }
  `

  @state()
  private counter = 0

  onClick = () => {
    this.counter++
  }

  render() {
    return html`
      <div class="card">
        <button id="counter" type="button" @click=${this.onClick}>
          count is ${this.counter}
        </button>
      </div>
    `
  }
}

customElements.define("x-counter", Counter);
