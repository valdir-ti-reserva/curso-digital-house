import styled from 'styled-components';

const listColors = {
  home: "#1ED760",
  premium: "#fff"
}

const BaseTitle = styled.h1`
  font-size: ${props => props.size + "rem"};
  font-weight: 900;
  color: ${props => listColors[props.page]};
  text-align: ${props => props.page === 'home' ? 'center' : 'left'};
  letter-spacing: -0.04em !important;
`;

export { BaseTitle }
