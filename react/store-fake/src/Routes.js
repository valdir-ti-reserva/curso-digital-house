import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Create, Update, List } from './pages/Users';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={() => {}}/>
        
        <Route path="/users" component={List}/>
        <Route path="/users/create" component={Create}/>
        <Route path="/users/:id/update" component={Update}/>
      </Switch>
    </BrowserRouter>
  )
}
