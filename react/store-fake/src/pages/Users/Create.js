import { FormUser } from '../../components/Form';
import { implementations } from '../../services/FakeStoreApi';
import {connect} from 'react-redux';

function Create({ Auth }) {

  return (
    <>
      <div>
        <h3>Cadastro de usuários</h3> 
        
        <FormUser 
          titleAction="Salvar" 
          action={implementations.storeUser} 
          userData="" 
        />

      </div>
    </>
  )
}

//Pegar apenas o estado que será utilizado
const mapStateToProps = (state) => ({ Auth: state.Auth });

export default connect(mapStateToProps, {})(Create);