const TabelaComite = () => {
  const data = [
    {
      responsavel: "ADÉLIA CRISTINA PERES TORRECILLA",
      fatec: "Faculdade de Tecnologia Zona Sul-SP Dom Paulo Evaristo Arns",
      municipio: "São Paulo",
      curso: "Logística",
      email: "adelia.torrecilla@fatec.sp.gov.br",
    },
    {
      responsavel: "ALEXANDRE SCHUSTER",
      fatec: "Faculdade de Tecnologia Deputado Ary Fossen",
      municipio: "Jundiaí",
      curso: "Logística",
      email: "alexandre.schuster@fatec.sp.gov.br",
    },
    {
        responsavel: "ALOISIO DOS SANTOS ESPÍNDOLA",
        fatec: "Faculdade de Tecnologia Jornalista Omar Cardoso de Oliveira",
        municipio: "Bragança Paulista",
        curso: "Logística",
        email: "aloisio.espindola@fatec.sp.gov.br",
      },
      {
        responsavel: "ANTONIO YOUSSEF",
        fatec: "Faculdade de Tecnologia Víctor Civita",
        municipio: "Taubaté",
        curso: "Transporte Terrestre",
        email: "antonio.youssef@fatec.sp.gov.br",
      },
      {
        responsavel: "CARLOS ANDRÉ MATTEI GYORI",
        fatec: "Faculdade de Tecnologia Professor João Mod",
        municipio: "Guaratinguetá",
        curso: "Logística",
        email: "carlos.gyori@fatec.sp.gov.br",
      },
      {
        responsavel: "CARLOS EDUARDO SCHUSTER",
        fatec: "Faculdade de Tecnologia Deputado Ary Fossen",
        municipio: "Jundiaí",
        curso: "Gestão de Logística Integrada",
        email: "carlos.schuster@fatec.sp.gov.br",
      },
      {
        responsavel: "CÉLIA DE LIMA PIZOLATO",
        fatec: "Faculdade de Tecnologia de Guarulhos",
        municipio: "Guarulhos",
        curso: "Logística Aeroportuária",
        email: "celia.pizolato@fatec.sp.gov.br",
      },
      {
        responsavel: "DONIZETTI LEONIDAS DE PAIVA",
        fatec: "Faculdade de Tecnologia Padre Danilo José de Oliveira Ohl",
        municipio: "Barueri",
        curso: "Transporte Terrestre",
        email: "donizetti.paiva@fatec.sp.gov.br",
      },
      {
        responsavel: "EDUARDO TERUOKA TOFOLI",
        fatec: "Faculdade de Tecnologia de Lins",
        municipio: "Lins",
        curso: "Logística",
        email: "eduardo.tofoli@fatec.sp.gov.br",
      },
      {
        responsavel: "FÁBIO SILVEIRA BONACHELLA",
        fatec: "Faculdade de Tecnologia de Botucatu",
        municipio: "Botucatu",
        curso: "Logística",
        email: "fabio.bonachella@fatec.sp.gov.br",
      },
      {
        responsavel: "FLÁVIO LUIS GRAVA SCALCO",
        fatec: "Faculdade de Tecnologia de Jahu",
        municipio: "Jahu",
        curso: "Logística",
        email: "flavio.scalco@fatec.sp.gov.br",
      },
      {
        responsavel: "JOÃO FRANCISCO FAVORETO",
        fatec: "Faculdade de Tecnologia Ministro Ralph Biasi",
        municipio: "Americana",
        curso: "Logística",
        email: "joao.favoreto@fatec.sp.gov.br",
      },
      {
        responsavel: "LUCIANO MORAES DOS SANTOS",
        fatec: "Faculdade de Tecnologia de Carapicuíba",
        municipio: "Carapicuíba",
        curso: "Logística",
        email: "luciano.msantos@fatec.sp.gov.br",
      },
      {
        responsavel: "MARCOS LOPES",
        fatec: "Faculdade de Tecnologia José Crespo Gonzales",
        municipio: "Sorocaba",
        curso: "AMS Logística",
        email: "marcos.lopes13@fatec.sp.gov.br",
      },
      {
        responsavel: "MARCOS MACHRY",
        fatec: "Faculdade de Tecnologia de Mogi das Cruzes",
        municipio: "Mogi das Cruzes",
        curso: "Logística",
        email: "marcos.machry@fatec.sp.gov.br",
      },
      {
        responsavel: "MARCUS VINICIUS DO NASCIMENTO",
        fatec: "Faculdade de Tecnologia Professor Jessen Vidal",
        municipio: "São José dos Campos",
        curso: "Logística",
        email: "nascimento.mv@fatec.sp.gov.br",
      },
      {
        responsavel: "MONICA CAIRRÃO RODRIGUES",
        fatec: "Faculdade de Tecnologia Padre Danilo José de Oliveira Ohl",
        municipio: "Barueri",
        curso: "Logística",
        email: "monica.rodrigues@fatec.sp.gov.br",
      },
      {
        responsavel: "NELSON AFONSO THOMAZ",
        fatec: "Faculdade de Tecnologia de Mauá",
        municipio: "Mauá",
        curso: "Logística",
        email: "nelson.thomaz@fatec.sp.gov.br",
      },
      {
        responsavel: "ORLANDO JOSÉ DE SOUZA CELESTINO",
        fatec: "Faculdade de Tecnologia de São Sebastião",
        municipio: "São Sebastião",
        curso: "Logística",
        email: "orlando.celestino@fatec.sp.gov.br",
      },
      {
        responsavel: "RENATO CESAR FERREIRA FERNANDES",
        fatec: "Faculdade de Tecnologia de Sumaré",
        municipio: "Sumaré",
        curso: "Gestão de Logística Integrada",
        email: "renato.fernandes@fatec.sp.gov.br",
      },
      {
        responsavel: "ROBERTO RAMOS DE MORAIS",
        fatec: "Faculdade de Tecnologia da Zona Leste",
        municipio: "São Paulo",
        curso: "Logística",
        email: "roberto.morais@fatec.sp.gov.br",
      },
      {
        responsavel: "RUY CORDIERO ACCOLI",
        fatec: "Faculdade de Tecnologia Rubens Lara",
        municipio: "Santos",
        curso: "AMS Logística",
        email: "ruy.accoli@fatec.sp.gov.br",
      },
      {
        responsavel: "SANDRA APARECIDA RIBEIRO OSSADA",
        fatec: "Faculdade de Tecnologia de Campinas",
        municipio: "Campinas",
        curso: "Logística",
        email: "sandra.ossada@fatec.sp.gov.br",
      },
      {
        responsavel: "EDNA VELOSO DE MEDEIROS",
        fatec: "Faculdade de Tecnologia Rubens Lara",
        municipio: "Santos",
        curso: "AMS Logística",
        email: "edna.medeiros@fatec.sp.gov.br",
      },
      {
        responsavel: "LAURO CARVALHO DE OLIVEIRA",
        fatec: "Faculdade de Tecnologia José Crespo Gonzales",
        municipio: "Sorocaba",
        curso: "AMS Logística",
        email: "lauro.oliveira@fatec.sp.gov.br",
      },
  ];

  return (
    <div className="min-h-screen p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Comitê FatecLog</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Pesquisar..."
          className="w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border  text-left text-sm">
          <thead>
            <tr>
              <th className="p-2 border ">Responsável</th>
              <th className="p-2 border ">Fatec</th>
              <th className="p-2 border ">Município</th>
              <th className="p-2 border ">Curso</th>
              <th className="p-2 border ">E-mail Institucional</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                
              >
                <td className="p-2 border border-gray-700">{item.responsavel}</td>
                <td className="p-2 border border-gray-700">{item.fatec}</td>
                <td className="p-2 border border-gray-700">{item.municipio}</td>
                <td className="p-2 border border-gray-700">{item.curso}</td>
                <td className="p-2 border border-gray-700">
                  <a
                    href={`mailto:${item.email}`}
                    className="text-blue-400 hover:underline"
                  >
                    {item.email}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabelaComite;
