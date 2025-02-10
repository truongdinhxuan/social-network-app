import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/layout/style.css'
import 'semantic-ui-css/semantic.min.css'
import App from './app/layout/App'
import { store, StoreContext } from './app/stores/store'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router/Router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreContext.Provider value={store}>
      <RouterProvider router={router} />
    </StoreContext.Provider>
  </StrictMode>,
)
