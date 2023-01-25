import './App.css';
import { Navigate, Router, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import router from './routes';
import store from './stores/store';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </div>
  )
}

export default App;
