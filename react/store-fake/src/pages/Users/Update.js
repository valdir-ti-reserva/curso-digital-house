import { useState, useEffect } from 'react';
import {FormUser} from '../../components/Form';
import { implementations } from '../../services/FakeStoreApi';
import { useParams } from 'react-router-dom';

export default function Update() {

  const [user, setUser] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getUser = async () => {
      const userData = await implementations.getUserById(id);

      setUser(userData.data);
    }
    getUser();
  }, [id]);

  return (
    <>
      <div>
        <h3>Editar usuário</h3> 
        
        <FormUser 
          titleAction="Editar" 
          action={implementations.updateUser} 
          userData={user}  
        />

      </div>
    </>
  )
}
