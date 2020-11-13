import { Switch } from "react-router-dom";
import styled from "styled-components";

const typeMessages = {
  client: {
    "align-self": "flex-end",
  },
  server: {
    "align-self": "flex-start",
  },
};
export const Container = styled.section`
  font-family: "Roboto";
  display: flex;
  height: 100vh;
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

export const ChatContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #fff;
  width: 900px;
  margin: 10px auto;
  height: 60vh;
  overflow-y: scroll;
  padding: 30px;
  border-radius: 10px;
`;

export const Message = styled.div`
  width: 30%;
  height: 60px;
  font-size: 25px;
  padding: 10px;
  align-self: ${(props) => {
    switch (props.type) {
      case "server":
        return "flex-start";
      case "client":
        return "flex-end";
      default:
        return "flex-start";
    }
  }};
  text-align: ${(props) => {
    switch (props.type) {
      case "server":
        return "left";
      case "client":
        return "right";
      default:
        return "left";
    }
  }};
  border: 1px solid;
  border-radius: 8px;
  background: #7755dd;
`;

export const Name = styled.h4`
  font-size: 16px;
  color: gray;
`;

export const Content = styled.p`
  font-size: 14px;
  color: #fff;
`;

export const NewMessage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  width: 900px;
  margin: 10px auto;
  height: 20vh;
  padding: 30px;
  border-radius: 10px;
`;

export const TextNewMessage = styled.textarea`
  width: 80%;
  border-radius: 10px;
  border: 1px solid gray;
  height: 40%;
  font-size: 18px;
`;

export const SendNewMessage = styled.button`
  background: green;
  font-size: 18px;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  border: none;
`;
