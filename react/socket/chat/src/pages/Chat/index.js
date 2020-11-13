import Conversa from '../../components/Chat';
import './styles.css';

const Chat = () => {
  return (
    <div className="chat">
      <div className="container">    
        <div className="row-1">
          {[1].map(p=><Conversa />)}        
          {/* {[1,2,3,4,5,6,7,8,9].map(p=><Conversa />)} */}
        </div>
        <div className="row-2">
          <input type="text" placeholder="Digite a mensagem..."/>
          <button>Enviar</button>
        </div>
      </div>
    </div>
  )
}

export default Chat
