import axios from 'axios';

const connection = axios.create({
  baseURL: 'http://localhost:3333'
})

const implementantions = {
  async login({email, password}){
    try {
      const response = await connection.post('/login', {email, password});
      
      if(response.status !== 200){
        throw new Error("Não foi possível realizar o login, tente novamente!")
      }

      return {
        error: false,
        data: response.data
      };

    } catch (err) {
      console.log(err);
      return {
        error: true,
        details: err.message
      }
    }
  },
  async store(user){
    try {
      const response = await connection.post('/register', user);

      if(response.status !== 201){
        throw new Error("Não foi inserir o usuário, tente novamente!")
      }

      return {
        error: false,
        data: response.data
      };

    } catch (err) {
      console.log(err);
      return {
        error: true,
        details: err.message
      }
    }
  }

}

export { connection, implementantions }