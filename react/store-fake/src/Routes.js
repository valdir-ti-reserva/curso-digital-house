import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Create, Update, List } from './pages/Users';
import { Home } from './pages/Home';
import { Login } from './pages/Auth';
import PrivateRoute from './components/PrivateRoute';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        
        {/* <Route path="/" exact component={Home}/> */}
        <Route path="/" exact component={Login}/>
        
        <Route path="/users" exact component={List}/>

        <PrivateRoute path="/users/create" component={Create}/>
        <Route path="/users/:id/update" component={Update}/>

      </Switch>
    </BrowserRouter>
  )
}
