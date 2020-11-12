import {useState, useEffect} from 'react';
import { Form, Button} from 'react-bootstrap';
import { toast, ToastContainer} from 'react-toastify';

export default function FormUsers(props) {

  const[user, setUser] = useState({
      id: '',
      email:'',
      username:'',
      password:'',
      name:{
          firstname:'',
          lastname:''
      },
      address:{
          city:'',
          street:'',
          number:'123',
          zipcode:'05761-270',
          geolocation:{
              lat:'-37.3159',
              long:'81.1496'
          }
      },
      phone:''  
  });

  useEffect(() => {
    if (props.userData) {
      setUser(props.userData);
    }
  }, [props.userData]);

  async function handleAction() {
    const result = await props.action(user);
    if(result.error){
      return toast.error(result.details, {
        position: 'bottom-right',
        autoClose: 2000
      });
    }

    return toast.success(result.details, {
      position: 'bottom-right',
      autoClose: 2000
    });
    
  }

  useEffect(() => {
    if (props.userData) {
      setUser(props.userData);
      return toast.success("Dados carregados com sucesso!", {
        position: 'bottom-right',
        autoClose: 2000
      });
    }
  }, [props.userData]);
  
  return (
    <>
      <ToastContainer />

      <Form>

          <Form.Group >
            <Form.Label>Nome</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Nome" 
              name="firstname" 
              id="firstname"
              value={user.name.firstname}
              onChange={ (e)=>
                setUser({
                  ...user, 
                  name: {
                    ...user.name,
                    firstname: e.target.value
                  }
                }) 
              }
            />
          </Form.Group>

          <Form.Group >
            <Form.Label>Sobrenome</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Sobrenome" 
              name="lastname" 
              id="lastname"
              value={user.name.lastname}
              onChange={ (e)=>
                setUser({
                  ...user, 
                  name: {
                    ...user.name,
                    lastname: e.target.value
                  }
                }) 
              } 
            />
          </Form.Group>
          
          <Form.Group >
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Digite seu e-mail" 
              name="email" 
              id="email" 
              value={user.email}
              onChange={ (e)=>
                setUser({
                  ...user, 
                  email: e.target.value                  
                }) 
              }           
            />
          </Form.Group>
          
          <Form.Group >
            <Form.Label>Telefone</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Digite telefone" 
              name="phone" 
              id="phone" 
              value={user.phone}
              onChange={ (e)=>
                setUser({
                  ...user, 
                  phone: e.target.value                  
                }) 
              }           
            />
          </Form.Group>

          <Form.Group >
            <Form.Label>Username</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Nome de usuário" 
              name="username" 
              id="username"
              value={user.username}
              onChange={ (e)=>
                setUser({
                  ...user, 
                  username: e.target.value                  
                }) 
              } 
            />
          </Form.Group>
          
          <Form.Group >
            <Form.Label>Senha</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Senha" 
              name="password" 
              id="password"
              value={user.password}
              onChange={ (e)=>
                setUser({
                  ...user, 
                  password: e.target.value
                }) 
              }  
            />
          </Form.Group>
                    
          <Form.Group >
            <Form.Label>Cidade</Form.Label>
            <Form.Control   
              type="text" 
              placeholder="Cidade" 
              name="city" 
              id="city"
              value={user.address.city}
              onChange={ (e)=>
                setUser({
                  ...user, 
                  address: {
                    ...user.address,
                    city: e.target.value
                  }
                }) 
              } 
            />
          </Form.Group>

          <Form.Group >
            <Form.Label>Rua</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Rua" 
              name="street" 
              id="street"
              value={user.address.street}
              onChange={ (e)=>
                setUser({
                  ...user, 
                  address: {
                    ...user.address,
                    street: e.target.value
                  }
                }) 
              }
            />
          </Form.Group>
          
          <Form.Group >
            <Form.Label>Número</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Número" 
              name="number" 
              id="number"
              value={user.address.number}
              onChange={ (e)=>
                setUser({
                  ...user, 
                  address: {
                    ...user.address,
                    number: e.target.value
                  }
                }) 
              }
            />
          </Form.Group>
          
          <Form.Group >
            <Form.Label>CEP</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="CEP" 
              name="zipcode" 
              id="zipcode"
              value={user.address.zipcode}
              onChange={ (e)=>
                setUser({
                  ...user, 
                  address: {
                    ...user.address,
                    zipcode: e.target.value
                  }
                }) 
              }
            />
          </Form.Group>
          
          <Form.Group >
            <Form.Label>Latitude</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Latitude" 
              name="lat" 
              id="lat"
              value={user.address.geolocation.lat}
              onChange={ (e)=>
                setUser({
                  ...user, 
                  address: {
                    geolocation:{
                      ...user.address.geolocation.lat,
                      lat: e.target.value
                    }
                  }
                }) 
              }  
            />
          </Form.Group>
          
          <Form.Group>
            <Form.Label>Longitude</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Longitude" 
              value={user.address.geolocation.long}
              name="long" 
              id="long"
              onChange={(e) =>
                setUser({
                  ...user,
                  address: {
                    geolocation:{
                      ...user.address.geolocation.long,
                      long: e.target.value
                    }
                  }
                })
              }
            />
          </Form.Group>

          <Button variant="primary" type="button" onClick={handleAction}>
            {props.titleAction}
          </Button>

        </Form>
    </>  
  )
}
