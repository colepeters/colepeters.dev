export default function H1 ({ html }) {
  return html`
    <style>
      h1 {
        font-size: var(--text-3);
        margin-block: var(--space-2xl);
      }
    </style>
    <h1 class='leading1 font-bold text-center'><slot></slot></h1>
  `
}
