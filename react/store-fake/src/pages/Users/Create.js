import { FormUser } from '../../components/Form';
import { implementations } from '../../services/FakeStoreApi';

export default function Create() {
  return (
    <>
      <div>
        <h3>Cadastro de usuários</h3> 
        
        <FormUser titleAction="Salvar" action={implementations.storeUser} userData="" />

      </div>
    </>
  )
}
