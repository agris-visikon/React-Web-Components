import { LitElement, html, css } from 'lit';

export class RevealCascade extends LitElement {
  static properties = {
    revealIndicator: {},
    revealText: {},
    enablePositioning: { type: Boolean },
  };

  constructor() {
    super();
    this.revealIndicator = 'V';
    this.revealText = 'Read more';
    this.enablePositioning = false;
  }

  revealIndicator: HTMLElement | string;
  revealText: HTMLElement | string;
  enablePositioning: boolean;

  static styles = css`
    .container {
      width: 100%;
      min-height: 100%;
      display: grid;
      grid-template-rows: auto 1fr;
      background: var(--visible-content-background, inherit);
      position: var(--relative-enabled, unset);
    }

    ::slotted([slot='visible-content']) {
      background: var(--visible-content-background, inherit);
      margin: var(--content-margin, 0 2em);
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    ::slotted([slot='revealable-content']) {
      background: var(--revealable-content-background, inherit);
      margin: var(--content-margin, 0 2em);
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
      <div class="container" style=${
        this.enablePositioning ? '--relative-enabled: relative;' : ''
      }>
        <slot name="visible-content"></slot>
        <div class="reveal-controls">
          <slot name="reveal-button"></slot>
        </div>
      </div>
      <slot name="revealable-content"></slot>
      <style>
      ${
        this.enablePositioning
          ? ':host { position: absolute; top: 0; bottom: 0; left: 0; }'
          : ''
      }
    </style>
    `;
  }
}
customElements.define('reveal-cascade', RevealCascade);
