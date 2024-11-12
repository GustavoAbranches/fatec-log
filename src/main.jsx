import { StrictMode } from 'react'

import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './pages/App.jsx'
import Sobre from './pages/Sobre.jsx'
import Programacao from './pages/Programacao.jsx'
import ComoChegar from './pages/ComoChegar.jsx'
import Hospedagem from './pages/Hospedagem.jsx'


import './index.css'
import SobreFatecLog from './pages/SobreFatecLog.jsx'
import EdicoesAnteriores from './pages/EdicoesAnteriores.jsx'
import CadastroParceirista from './pages/CadastroParceirista.jsx'
import Patrocinadores from './pages/Patrocinadores.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: '/sobre',
    element: <Sobre/>,
  },
  {
    path: '/programacao',
    element: <Programacao />,
  },
  {
    path: '/comochegar',
    element: <ComoChegar />,
  },
  {
    path: '/hospedagem',
    element: <Hospedagem />,
  },
  {
    path: '/sobrefateclog',
    element: <SobreFatecLog />,
  },
  {
    path: '/edicoesanteriores',
    element: <EdicoesAnteriores />,
  },
  {
    path: '/cadastroparceirista',
    element: <CadastroParceirista />,
  },
  {
    path: '/patrocinadores',
    element: <Patrocinadores />,
  },
  {
    path: '/orientacaoescricao',
    element: <Patrocinadores />,
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router} />
  </StrictMode>,
)
