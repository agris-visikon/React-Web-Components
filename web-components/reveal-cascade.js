import { LitElement, html, css } from 'lit';
// import { customElement, property } from 'lit/decorators.js';

// @customElement('reveal-cascade')
export class RevealCascade extends LitElement {
  static properties = {
    revealIndicator: {},
    revealText: {},
  };

  constructor() {
    super();
    this.revealIndicator = 'V';
    this.revealText = 'Read more';
  }

  // @property() revealIndicator = 'V';
  // @property() revealText = 'Read more';

  static styles = css`
    .container {
      width: 100%;
      min-height: 100vh;
      display: grid;
    }

    ::slotted([slot="visible-content"]) {
      grid-template-rows: auto 1fr;
      background: var(--visible-content-background, inherit);
    }

    ::slotted([slot="revealable-content"]) {
      background: var(--revealable-content-background, inherit);
    }

    .reveal-controls {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      padding-top: 0.5rem;
      background: var(--reveal-controls-background, inherit);
      background: var(--visible-content-background, inherit);
    }
  `;

  render() {
    return html`
      <div class="container">
        <slot name="visible-content"></slot>
        <div class="reveal-controls">
          <span>${this.revealText}</span>
          <span>${this.revealIndicator}</span>
        </div>
      </div>
      <slot name="revealable-content"></slot>
    `;
  }
}
customElements.define('reveal-cascade', RevealCascade);
