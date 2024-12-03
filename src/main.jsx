import { StrictMode } from "react";
import ScrollToTop from "./components/Main/ScrollToTop.jsx";

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./pages/App.jsx";
import Sobre from "./pages/Sobre.jsx";
import Programacao from "./pages/Programacao.jsx";
import ComoChegar from "./pages/ComoChegar.jsx";
import Hospedagem from "./pages/Hospedagem.jsx";
import SobreFatecLog from "./pages/SobreFatecLog.jsx";
import OrientacaoArtigo from "./pages/OrientacaoArtigo.jsx";
import OrientacaoInscricao from "./pages/OrientacaoInscricao.jsx";
import Manual from "./pages/Manual.jsx";
import AcessoSistema from "./pages/AcessoSistema.jsx";
import MapaEvento from "./pages/MapaEvento.jsx";
import Fichatecnica from "./pages/FichaTecnica.jsx";
import Certificado from "./pages/Certificado.jsx";
import Premio from "./pages/Premio.jsx";

import "./index.css";
import ComiteFatecLog from "./pages/ComiteFatecLog.jsx";
import OrientacaoBoletim from "./pages/OrientacaoBoletim.jsx";
import GrupoPesquisa from "./pages/GruposPesquisa.jsx";
import Artigos from "./pages/Artigos.jsx";
import Noticias from "./pages/Noticias.jsx";
import Podcast from "./pages/Podcast.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sobre",
    element: <Sobre />,
  },
  {
    path: "/programacao",
    element: <Programacao />,
  },
  {
    path: "/comochegar",
    element: <ComoChegar />,
  },
  {
    path: "/hospedagem",
    element: <Hospedagem />,
  },
  {
    path: "/sobrefateclog",
    element: <SobreFatecLog />,
  },
  {
    path: "/orientacaoinscricao",
    element: <OrientacaoInscricao />,
  },
  {
    path: "/orientacaoartigo",
    element: <OrientacaoArtigo />,
  },
  {
    path: "/manualdeidentidadevisual",
    element: <Manual/>
  },
  {
    path: "/acessosistema",
    element: <AcessoSistema/>
  },
  {
    path: "/mapaevento",
    element: <MapaEvento/>
  },
  {
    path: "/fichatecnica",
    element: <Fichatecnica/>
  },
  {
    path: "/comitefateclog",
    element: <ComiteFatecLog/>
  },
  {
    path: "/certificados",
    element: <Certificado/>
  },
  {
    path: "/premio",
    element: <Premio/>
  },
  {
    path: "/orientacaoboletim",
    element: <OrientacaoBoletim/>
  },
  {
    path: "/artigos",
    element: <Artigos/>
  },
  {
    path: "/noticias",
    element: <Noticias/>
  },
  {
    path: "/podcast",
    element: <Podcast/>
  },
  {
    path: "/grupopesquisa",
    element: <GrupoPesquisa/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <ScrollToTop />
    </RouterProvider>
  </StrictMode>
);
