import React from 'react'

import { BaseButton } from './styles.js';

export default function Button(props) {
  return (
    <BaseButton {...props}>{props.children}</BaseButton>
  )
}
