import styled from 'styled-components';

const listColors = {
  home: "#1ED760",
  premium: "#fff"
}

const BaseTitle = styled.h1`
  font-size: ${props => props.size + "rem"};
  font-weight: bold;
  color: ${props => listColors[props.page]};
  text-align: ${props => props.page === 'home' ? 'center' : 'left'};
`;

export { BaseTitle }
