import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../state/User";
import { Container, Form, Nome, Titulo } from "./styles";

function Login() {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();
  return (
    <>
      <Container>
        <Form>
          <Titulo>Digite um nome para começar!</Titulo>
          <Nome
            type="text"
            placeholder="Digite seu nome"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <button
            onClick={() => {
              history.push("/chat");
            }}
          >
            Logar
          </button>
        </Form>
      </Container>
    </>
  );
}

export default Login;
