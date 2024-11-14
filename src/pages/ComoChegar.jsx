import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb.jsx";
import Localizacao from "../components/Localizacao.jsx";

import textStyle from "../util/textStyle.js";

function ComoChegar() {

  return (
    <>
      <Header />
      <Navbar />
      <Breadcrumb />

      <div className="flex flex-col w-full gap-2 p-20">
        <h1 className="font-bold text-3xl pb-8">Quais as principais rotas?</h1>

        <h2 className={textStyle.h2Style}>1.De carro (via rodovias)</h2>
        <p className={textStyle.pStyle}>
          Se você está viajando de carro, a Fatec Carapicuíba está localizada na
          Avenida 26 de Março, 2100. Os principais caminhos para chegar lá
          incluem
        </p>
        <p className={textStyle.pStyle}>A partir da Rodovia Castello Branco (SP-280)</p>
        <ul className={textStyle.ulStyle}>
          <li>Saída 23B para Carapicuíba.</li>
          <li>Continue na Avenida 26 de Março.</li>
          <li>
            A Fatec estará localizada ao longo dessa avenida, próxima à rodovia
          </li>
        </ul>

        <p className={textStyle.pStyle}>A partir da Rodovia Raposo Tavares (SP-270)</p>
        <ul className={textStyle.ulStyle}>
          <li>
            Entre na Avenida Antônio Joaquim de Moraes e continue até encontrar
            a Avenida 26 de Março.
          </li>
          <li>
            A Fatec Carapicuíba estará ao longo dessa avenida, à esquerda ou
            direita, dependendo da direção.
          </li>
        </ul>

        <p className={textStyle.pStyle}>A partir do Centro de São Paulo</p>
        <ul className={textStyle.ulStyle}>
          <li>
            Pegue a Marginal Tietê e siga pela Rodovia Castello Branco (SP-280).
          </li>
          <li>Siga as orientações acima para a Rodovia Castello Branco.</li>
        </ul>

        <h2 className={textStyle.h2Style}>2. De transporte público (ônibus e trem)</h2>
        <p className={textStyle.pStyle}>1. Trem (via CPTM)</p>
        <ul className={textStyle.ulStyle}>
          <li>
            Se você estiver na Estação da Luz ou em qualquer estação da CPTM
            (Companhia Paulista de Trens Metropolitanos), você pode pegar a
            Linha 8-Diamante (Brás - Itapevi).
          </li>
          <li>Desça na Estação Carapicuíba.</li>
          <li>
            A partir da Estação Carapicuíba, você pode pegar um ônibus que vá
            até a Avenida 26 de Março ou seguir a pé (cerca de 10-15 minutos de
            caminhada).
          </li>
        </ul>

        <p className={textStyle.pStyle}>2. Ônibu</p>
        <ul className={textStyle.ulStyle}>
          <li>
            A cidade de Carapicuíba tem várias linhas de ônibus que conectam
            pontos centrais com a Fatec.
          </li>
          <li>
            Você pode verificar as linhas diretamente nas plataformas de
            transporte público ou consultar pelo Google Maps ou aplicativos de
            transporte, como o Moovit, para encontrar as melhores opções de
            ônibus
          </li>
        </ul>

        <h2 className={textStyle.h2Style}>3. De bicicleta</h2>
        <p className={textStyle.pStyle}>
          Se você está em Carapicuíba ou nas proximidades, a Fatec também pode
          ser acessada de bicicleta. A cidade tem algumas ciclovias, mas é
          importante verificar a melhor rota de acordo com sua localização
        </p>

        <p className="text-slate-800 font-bold">Dica importante:</p>

        <p className={textStyle.pStyle}>
          Para planejar a melhor rota de transporte público, sempre verifique os
          horários e opções atualizadas em aplicativos como o Google Maps,
          Moovit, ou o SPTrans, caso esteja em São Paulo
        </p>
        <p className={textStyle.pStyle}>
          Se você precisar de uma rota mais detalhada ou ajuda com outro tipo de
          transporte, posso fornecer mais informações
        </p>
      </div>
      <Localizacao />
      <Footer />
    </>
  );
}

export default ComoChegar;
