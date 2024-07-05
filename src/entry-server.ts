import {render as renderMarkup} from '@lit-labs/ssr'
import {collectResult} from '@lit-labs/ssr/lib/render-result.js'
import {html} from 'lit'
import './app'

export async function render(url: string) {
  const pathname = `/${url}`
  const page = `x-page${pathname.replaceAll('/', '-').replace(/-$/, '')}`
  const result = renderMarkup(html`<x-app page="${page}"></x-app>`)
  const body = await collectResult(result)
  return {body}
}
