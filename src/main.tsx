import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react'
// import { store, persistor } from '@/store';
import App from '@/App'
import store from '@/modules/store';
import { setupProdMockServer } from '../mock';
import '@/assets/style/index.scss';
import 'virtual:svg-icons-register';

const renderApp = () => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <App />
      {/* </PersistGate> */}
    </Provider>
  )
}

setupProdMockServer();
renderApp();
