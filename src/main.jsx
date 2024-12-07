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
import RootLayout from "./pages/layout/RootLayout.jsx";

import img_fatec_carapicuiba from "./assets/header_img/img_fatec_carapicuiba.png";
import img_programacao from "./assets/header_img/img_programacao.png";
import img_como_chegar from "./assets/header_img/img_como_chegar.png";
import img_hospedagem from "./assets/header_img/img_hospedagem.png";
import sobre_fatec_log from "./assets/header_img/sobre_fatec_log.png";
import img_orientacao_artigo from "./assets/header_img/img_orientacao_artigo.png";
import img_miv from "./assets/header_img/img_miv.png";
import img_certificado from "./assets/header_img/img_certificado.png";
import img_premio from "./assets/header_img/img_premio.png";
import noticias from "./assets/header_img/noticias.png";
import podcast from "./assets/header_img/podcast.png";
import img_grupo_pesquisa from "./assets/header_img/img_grupo_pesquisa.png";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        handle: { showTimer: true, showBreadcrumb: false },
        element: <App />,
      },
      {
        path: "/sobre",
        handle: { bannerImg: img_fatec_carapicuiba },
        element: <Sobre />,
      },
      {
        path: "/programacao",
        handle: { bannerImg: img_programacao },
        element: <Programacao />,
      },
      {
        path: "/comochegar",
        handle: { bannerImg: img_como_chegar },
        element: <ComoChegar />,
      },
      {
        path: "/hospedagem",
        handle: { bannerImg: img_hospedagem },
        element: <Hospedagem />,
      },
      {
        path: "/sobrefateclog",
        handle: { bannerImg: sobre_fatec_log },
        element: <SobreFatecLog />,
      },
      {
        path: "/orientacaoinscricao",
        handle: { bannerImg: sobre_fatec_log },
        element: <OrientacaoInscricao />,
      },
      {
        path: "/orientacaoartigo",
        handle: { bannerImg: img_orientacao_artigo },
        element: <OrientacaoArtigo />,
      },
      {
        path: "/manualdeidentidadevisual",
        handle: { bannerImg: img_miv },
        element: <Manual />,
      },
      {
        path: "/acessosistema",
        handle: { bannerImg: "" },
        element: <AcessoSistema />,
      },
      {
        path: "/mapaevento",
        handle: { bannerImg: "" },
        element: <MapaEvento />,
      },
      {
        path: "/fichatecnica",
        handle: { bannerImg: "" },
        element: <Fichatecnica />,
      },
      {
        path: "/comitefateclog",
        handle: { bannerImg: "" },
        element: <ComiteFatecLog />,
      },
      {
        path: "/certificados",
        handle: { bannerImg: img_certificado },
        element: <Certificado />,
      },
      {
        path: "/premio",
        handle: { bannerImg: img_premio },
        element: <Premio />,
      },
      {
        path: "/orientacaoboletim",
        handle: { bannerImg: img_orientacao_artigo },
        element: <OrientacaoBoletim />,
      },
      {
        path: "/artigos",
        handle: { 
          bannerImg: noticias //
        },
        element: <Artigos />,
      },
      {
        path: "/noticias",
        handle: { bannerImg: noticias },
        element: <Noticias />,
      },
      {
        path: "/podcast",
        handle: { bannerImg: podcast },
        element: <Podcast />,
      },
      {
        path: "/grupopesquisa",
        handle: { bannerImg: img_grupo_pesquisa },
        element: <GrupoPesquisa />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <ScrollToTop />
    </RouterProvider>
  </StrictMode>
);
