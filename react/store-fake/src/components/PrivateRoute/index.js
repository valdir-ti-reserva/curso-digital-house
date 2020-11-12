import { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function PrivateRoute({ component: Component, Auth, ...rest}) {
  
  const [token, setToken] = useState('');

  // useEffect(()=>{
  //   setToken(localStorage.getItem('@user-token'))
  // }, [Auth]);

  console.log(Auth)


  return <Route {...rest} render = {(props) =>{
    return Auth.token?(
        <Component {...props}></Component>
      ):<Redirect 
        to={{
          pathname: "/"
        }} />
  }}/>;
}

//Pegar apenas o estado que será utilizado
const mapStateToProps = (state) => ({ Auth: state.Auth });

export default connect(mapStateToProps, {})(PrivateRoute);