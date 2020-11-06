import styled from 'styled-components';

const BaseButton = styled.button`
  border-radius: 40px;
  background: #1ED760;
  color: ${props => props.page === 'home' ? '#2d46b9' : '#000'};
  font-weight: bold;
  outline: none;
`;

const DeleteButton = styled(BaseButton)`
  background: red;
`;

export { BaseButton, DeleteButton };