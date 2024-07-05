import {LitElement, css} from 'lit'
import {property} from 'lit/decorators.js'
import {html, unsafeStatic} from 'lit/static-html.js';
import './pages/page'
import './pages/counter/page'

class App extends LitElement {
  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }
  `

  connectedCallback() {
    super.connectedCallback()
    window.addEventListener('navigate', this.onNavigate)
    this.onNavigate()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    window.removeEventListener('navigate', this.onNavigate)
  }

  @property()
  page?: string

  onNavigate = () => {
    const {pathname} = location
    this.page = `x-page${pathname.replaceAll('/', '-').replace(/-$/, '')}`
  }

  render() {
    const tag = unsafeStatic(this.page)
    return html`
      <${tag}></${tag}>
    `
  }
}

customElements.define("x-app", App);
