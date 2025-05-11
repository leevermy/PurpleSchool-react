import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { UserContextProvider } from './context/user.context';
import { router } from './routes/routes';
import './index.css'
import { Provider } from 'react-redux';
import { store } from './store/store';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserContextProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </UserContextProvider>
  </StrictMode>,
)
