import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { UserContextProvider } from './context/user.context';
import { router } from './routes/routes';
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </StrictMode>,
)
