import { useState } from "react";
import { textData } from "../../util/programacaoText";
import BarraPesquisa from "./BarraPesquisa";

export default function GradeProgramacao() {
  const [searchTerm, setSearchTerm] = useState("");
  const [content, setContent] = useState(textData[0]?.content || []);
  const [activeTab, setActiveTab] = useState("25 DE JUNHO");

  const text = "Clique em um botão para ver os eventos de cada dia.";

  const filteredContent = content.filter((item) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      item.title.toLowerCase().includes(searchLower) ||
      item.time.toLowerCase().includes(searchLower) ||
      item.type.toLowerCase().includes(searchLower) ||
      item.block.toLowerCase().includes(searchLower) ||
      item.room.toLowerCase().includes(searchLower) ||
      item.text.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="flex flex-col justify-start items-start w-full h-auto mt-8 md:mt-20">
      <div className="w-full overflow-x-auto">
        <div className="flex flex-row justify-start md:justify-center min-w-max px-4 md:px-16">
          {textData.map((btnDay) => (
            <div
              key={btnDay.day}
              onClick={() => {
                setContent(btnDay.content);
                setActiveTab(btnDay.day);
              }}
              className={`px-3 md:px-16 py-2 md:py-3 font-semibold text-xs md:text-2xl transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === btnDay.day
                  ? "text-fatec-red border-b-2 border-fatec-red"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {btnDay.day}
            </div>
          ))}
        </div>
      </div>

      <BarraPesquisa searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="flex flex-col justify-start items-start w-full px-4 md:px-16">
        {filteredContent.length === 0 ? (
          <p className="text-base md:text-lg text-slate-600 mt-4">{text}</p>
        ) : (
          filteredContent.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className="flex flex-col md:flex-row justify-start items-start md:items-center w-full p-4 mb-6 gap-4 md:gap-0"
            >
              <div className="flex flex-col w-full md:w-2/3 max-w-4xl">
                <p className="text-xl md:text-3xl font-bold text-black">
                  {item.time}
                </p>
                <p className="text-lg md:text-2xl font-semibold text-slate-500 mb-2">
                  {item.room !== ""
                    ? `${item.block} - ${item.room}`
                    : `${item.block}`}
                </p>
                <p
                  className={`text-base md:text-xl ${
                    item.type === "Palestra"
                      ? "text-fatec-red"
                      : item.type === "Workshop"
                      ? "text-fatec-orange"
                      : item.type === "Premiação"
                      ? "text-fatec-yellow"
                      : ""
                  }`}
                >
                  {item.type}
                </p>
              </div>

              <div className="hidden md:block w-1 h-32 bg-black"></div>

              <div className="block md:hidden w-full h-px bg-black my-2"></div>

              <div className="flex flex-col text-justify md:px-5 w-full">
                <p className="text-xl md:text-3xl font-semibold mb-2 text-slate-800">
                  {item.title}
                </p>
                <p className="text-base md:text-lg font-semibold mb-2 text-slate-800">
                  {item.speaker}
                </p>
                <p className="text-sm md:text-base text-slate-800">
                  {item.text}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
