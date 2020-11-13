import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './pages/Home';
import Chat from './pages/Chat';

const Routes = () => {
  return (
    <>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/chat" component={Chat} />
      </Router>
    </>
  )
}

export default Routes;