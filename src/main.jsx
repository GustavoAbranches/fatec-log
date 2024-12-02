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
import OrientacaoEscricao from "./pages/OrientacaoEscricao.jsx";

import "./index.css";

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
    path: "/orientacaoescricao",
    element: <OrientacaoEscricao />,
  },
  {
    path: "/orientacaoartigo",
    element: <OrientacaoArtigo />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <ScrollToTop />
    </RouterProvider>
  </StrictMode>
);
