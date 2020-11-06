import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Premium from './pages/Premium'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/premium" component={Premium}/>
      </Switch>
    </BrowserRouter>
  )
}
