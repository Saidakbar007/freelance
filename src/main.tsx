
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './store/store'; // Импортируем store
import { Provider } from 'react-redux'; // Импортируем Provider

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

