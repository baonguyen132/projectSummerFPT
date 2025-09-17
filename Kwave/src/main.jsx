import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import { store } from './store'

import router from './router'
import { RouterProvider } from 'react-router'

createRoot(document.getElementById('root')).render(
 <Provider store={store}>
  <RouterProvider router={router} />
</Provider>
)
