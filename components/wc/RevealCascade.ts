import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { RevealCascade as RevealCascadeWC } from '../../web-components/';

export const RevealCascade = createComponent({
  react: React,
  tagName: 'reveal-cascade',
  elementClass: RevealCascadeWC,
});
