import styled from 'styled-components';

const listColors = {
  home: "#1ED760",
  premium: "#fff"
}

const BaseParagraph = styled.h1`
  font-size: ${props => props.size + "rem"};
  font-weight: bold;
  color: ${props => listColors[props.page]};
  text-align: center;
  margin: 15px 0;
`;

export {BaseParagraph}