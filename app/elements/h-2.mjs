export default function H2 ({ html }) {
  return html`
    <style>
      h2 {
        font-size: var(--text-2);
        margin-top: var(--space-l);
      }
    </style>
    <h2 class='leading1 font-bold'><slot></slot></h2>
  `
}
