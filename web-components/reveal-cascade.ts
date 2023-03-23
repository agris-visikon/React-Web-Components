import { LitElement, html, css } from 'lit';

export class RevealCascade extends LitElement {
  static properties = {
    headerHeight: {},
  };

  constructor() {
    super();
    this.headerHeight = '0px';
  }

  headerHeight: string;

  static styles = css`
    .container {
      width: 100%;
      min-height: calc(100vh - var(--header-height, 0px));
      display: grid;
    }

    ::slotted([slot='visible-content']) {
      display: grid;
      grid-template-rows: auto 1fr;
      background: var(--visible-content-background, inherit);
    }

    ::slotted([slot='revealable-content']) {
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
      <div class="container" style="--header-height: ${this.headerHeight};">
        <slot name="visible-content"></slot>
        <div class="reveal-controls">
          <slot name="reveal-button"></slot>
        </div>
      </div>
      <slot name="revealable-content"></slot>
    `;
  }
}
customElements.define('reveal-cascade', RevealCascade);
