import styled from "styled-components";

export const Container = styled.section`
  font-family: "Roboto";
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(195, 34, 189);
  background: linear-gradient(
    0deg,
    rgba(195, 34, 189, 1) 0%,
    rgba(45, 136, 253, 1) 100%
  );
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1100px;
  margin: 0 auto;
  height: 100vh;
  padding: 20px;
`;

export const Nome = styled.input`
  width: 80%;
  height: 60px;
  font-size: 25px;
  padding: 10px;
`;

export const Titulo = styled.h1`
  font-size: 40px;
  margin: 20px 0;
  color: #fff;
`;
