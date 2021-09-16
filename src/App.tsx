import { Provider } from 'react-redux';

import Routes from './routes';
import { store } from './store';

import 'src/styles/global.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
