import axios from 'axios';

const connection = axios.create({
  baseURL: 'https://fakestoreapi.com'
});

const implementations = {
  async storeUser(user){
    try {
      const response = await connection.post('/users', user);

      if(response.status !== 201){
        throw new Error("Não foi possível cadastrar o usuário, tente novamente!")
      }

      return {
        error: false,
        data: response.data
      };

    } catch (err) {
      console.error(err);
      return {
        error: true,
        details: err.message
      }
    }
  },
  async updateUser(user){
    try {
      const response = await connection.put(`/users/${user.id}`, user);

      if(response.status !== 200){
        throw new Error("Não foi possível editar o usuário, tente novamente!")
      }

      return {
        error: false,
        data: response.data
      };

    } catch (err) {
      console.error(err);
      return {
        error: true,
        details: err.message
      }
    }
  },
  async getUserById(id){

    try {
      const response = await connection.get(`/users/${id}`);
      
      if(response.status !== 200){
        throw new Error("Não foi possível carregar os dados do usuário, tente novamente!")
      }
  
      return {
        error: false,
        data: response.data
      };
  
    } catch (err) {
      console.error(err);
      
      return {
        error: true,
        details: err.message
      }  
    }
  }
 

  
}

export { connection, implementations };