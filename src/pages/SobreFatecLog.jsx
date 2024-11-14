import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
function SobreFatecLog() {
  return (
    <>
      <Header />
      <Navbar />
      <Breadcrumb />

      <div className="flex flex-col gap-5 p-10">
        <h1 className="font-bold text-3xl pb-5">Sobre o Fatec Log</h1>

        <p className="font-semibold text-md text-slate-700">
          O FATECLOG é atualmente o maior congresso de Logística da América Latina.
        </p>
        <p className="font-semibold text-md text-slate-700">
        Criado em 2010, em Jundiaí, o evento é organizado pelo Comitê de Coordenadores do Curso 
        Superior de Tecnologia em Logística das Fatecs, que hoje reúne representantes 
        de 24 unidades, cobrindo cursos como Logística, Gestão de Logística Integrada, 
        Logística Aeroportuária, Transporte Terrestre e Gestão Portuária.
        </p>
        <p className="font-semibold text-md text-slate-700">
        Este congresso anual, itinerante e realizado em rodízio entre as Fatecs com cursos afins,
        reúne aproximadamente 3.000 participantes a cada edição. Seu objetivo é fomentar a 
        publicação e divulgação de pesquisas de professores e alunos das Fatecs, além de 
        aproximar o meio acadêmico do setor empresarial para fomentar parcerias e 
        colaborações que contribuam para o avanço do ensino tecnológico e da pesquisa aplicada.
        O evento, aberto tanto ao público acadêmico quanto empresarial, oferece uma 
        programação variada, incluindo palestras com grandes nomes da logística
        nacional, workshops, visitas técnicas e apresentações de artigos científicos 
        (com mais de 400 trabalhos em média), além da exposição de novas
        tecnologias e inovações pelos patrocinadores e parceiros.
        </p>
        <p className="font-semibold text-md text-slate-700">
        A edição de 2024, a XV, retorna a Jundiaí como uma celebração especial, 
        com foco principal na inovação e nas práticas de ESG. Durante o evento, ocorre
        também a fase final do &quot;Desafio Paragon de Simulação em Arena,&quot; competição 
        organizada pela Paragon, patrocinadora do congresso e fornecedora do
        software ARENA da Rockwell, amplamente usado no ensino nas Fatecs. 
        O tema do Desafio de 2024 é “Planejando a produção com logística reversa no
        Arena
        </p>
      </div>

      

      <div className="flex flex-col gap-5 p-10">
        <h1 className="font-bold text-3xl pb-5">FatecLog XVI</h1>
        <p className="font-semibold text-md text-slate-700">
        A edição de 2025, a XVI, será realizada em Carapicuíba, tendo o criador do evento 
        como homenageado. Durante o evento, ocorre também a fase final do &quot;Desafio Paragon
        de Simulação em Arena,&quot; competição organizada pela Paragon, patrocinadora do 
        congresso e fornecedora do software ARENA da Rockwell, amplamente usado no 
        ensino nas Fatec
        </p>
      </div>
      <Footer />
    </>
  );
}

export default SobreFatecLog;
