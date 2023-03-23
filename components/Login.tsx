import * as React from 'react';
import { RevealCascade } from './wc/RevealCascade';
import '../style.css';

export function Login() {
  const customStyles = {
    '--visible-content-background': 'pink',
    '--reveal-controls-background': 'white',
    '--revealable-content-background': 'orange',
  };

  const revealText = 'Read more about My Treatment';
  const revealIndicator = 'V';

  return (
    <RevealCascade
      style={customStyles}
      revealText={revealText}
      revealIndicator={revealIndicator}
    >
      <div slot="visible-content">
        <VisibleContent />
      </div>
      <div slot="revealable-content">
        <RevealableContent />
      </div>
    </RevealCascade>
  );
}

function VisibleContent() {
  return (
    <React.Fragment>
      <div className="rem5 centered">[IMG]</div>
      <div className="centered">
        <h1>My Treatment</h1>
      </div>
      <div className="centered">
        <h2>Welcome to My Treatment</h2>
      </div>
      <div className="centered">
        <input />
      </div>
      <div className="centered">
        <button>CONTINUE</button>
      </div>

      <div className="centered">
        <p>Where can I find my Code?</p>
      </div>
      <div className="centered">
        <p>
          You receive a code from your place of treatment. You either receive a
          code on a code card or digitally (eg. by mail).
        </p>
      </div>
    </React.Fragment>
  );
}

function RevealableContent() {
  return (
    <React.Fragment>
      <div className="rem5 centered">bbb</div>
      <div className="rem5 centered">bbb</div>
    </React.Fragment>
  );
}
