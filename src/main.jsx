import { StrictMode } from 'react'

import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './pages/App.jsx'
import Sobre from './pages/Sobre.jsx'
import Programacao from './pages/Programacao.jsx'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: '/Sobre',
    element: <Sobre/>,
  },
  {
    path: '/Programacao',
    element: <Programacao />,
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router} />
  </StrictMode>,
)
