import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

const Home = () => {

  const [name, setName] = useState('');
  const history = useHistory();

  function enterChat(){
    if(name.length > 0){
      history.push("/chat");
    }else{
      alert("Favor digitar um nome para iniciar");
    }
  }

  return (
    <div className="home">
      <div className="container">

        <div className="title">Digite seu nome para começar!</div>
      
        <input type="text" className="input" placeholder="Digite o seu nome" onChange={e => setName(e.target.value)}/>
      
        <button onClick={enterChat}>Entrar</button>
    
      </div>
    </div>
  )
}

export default Home;