export default function DateTime ({ html, state }) {
  const { attrs } = state
  const { datetime } = attrs
  return html`
    <style>
      :host {
        margin-bottom: var(--space-m);
      }
    </style>
    <p class='text-center font-bold'>
      <time datetime='${datetime}'>
        <slot></slot>
      </time>
    </p>
  `
}
