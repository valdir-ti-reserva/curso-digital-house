import React from 'react';

import {BaseParagraph} from './styles';

export default function Paragraph(props) {
  return (
  <BaseParagraph {...props}>{props.children}</BaseParagraph>
  )
}
