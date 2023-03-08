export default function H3 ({ html }) {
  return html`
    <style>
      h3 {
        font-size: var(--text-1);
        margin-top: var(--space-s);
      }
    </style>
    <h3 class='leading1 font-bold'><slot></slot></h3>
  `
}
