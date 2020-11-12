import 'react-toastify/dist/ReactToastify.css';

import Routes from './Routes';
import Template from './components/Template';

import './App.css';

// Redux
import store from './store';
import { Provider } from 'react-redux';

function App () {
    return (
        <Provider store={store} >
            <Template>
                <Routes />
            </Template>
        </Provider>
    );
}

export default App;
