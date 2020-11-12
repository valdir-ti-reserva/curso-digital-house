import React, { useState } from 'react';

import { connection } from '../../services/AuthStoreApi';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AuthActions from '../../store/Auth/actions';
import { useHistory } from 'react-router-dom';

function Login({ Auth, saveLogin }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  async function handleSubmit(e){
    e.preventDefault();
    const response = await connection.post('/login', {email, password});
    saveLogin(response.data.token);
    // localStorage.setItem('@user-token', response.data.token);
    history.push("/users/create");
  }

  return (
    <>
      <h2>Login</h2>
      <form 
        className="w-50" 
        onSubmit={handleSubmit}> 
        <div className="form-group"> 
          <label>Email</label> 
          <input 
            className="form-control" 
            type="email" 
            name="email" 
            id="email"
            autoComplete="off"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          /> 
        </div> 
        <div className="form-group"> 
          <label>Password</label> 
          <input 
            className="form-control" 
            type="password" 
            name="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          /> 
        </div> 
        <div className="form-group"> 
          <button className="btn btn-success" type="submit"> Login </button> 
        </div> 
      </form>
    </>  
  )
}

//Pegar apenas o estado que será utilizado
const mapStateToProps = (state) => ({ Auth: state.Auth });

//Dispara as actions do Redux
const mapDispatchToProps = (dispatch) => 
  bindActionCreators(AuthActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
