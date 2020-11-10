import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Create, Update, List } from './pages/Users';
import { Home } from './pages/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        
        <Route path="/" exact component={Home}/>
        
        <Route path="/users" exact component={List}/>
        <Route path="/users/create" component={Create}/>
        <Route path="/users/:id/update" component={Update}/>

      </Switch>
    </BrowserRouter>
  )
}
