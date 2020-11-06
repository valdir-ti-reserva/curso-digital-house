import React from 'react'

import {BaseTitle} from './style.js';

export default function Title(props) {
  return (
    <BaseTitle {...props}>{props.children}</BaseTitle>
  );
}
