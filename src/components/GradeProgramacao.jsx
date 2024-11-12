import { useState } from "react";

import { textData } from "../util/programacaoText";

export default function GradeProgramacao() {
  const [content, setContent] = useState(textData[0]?.content ||[]);
  const [activeTab, setActiveTab] = useState("25 DE JUNHO");

  const text = "Clique em um botão para ver os eventos de cada dia.";

  return (
    <div className="flex flex-col justify-start items-start w-full h-auto mt-20 ">
      <div className="flex flex-wrap justify-center px-16">
        {textData.map((btnDay) => {
          return (
            <div
              key={btnDay.day}
              onClick={() => {
                setContent(btnDay.content);
                setActiveTab(btnDay.day);
              }}
              className={`px-16 py-3 font-bold text-2xl transition-colors cursor-pointer ${
                activeTab === btnDay.day
                  ? "text-red-600 border-b-2 border-red-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {btnDay.day}
            </div>
          );
        })}
      </div>

      <div className="flex flex-col justify-start items-start px-16">
        {content.length === 0 ? (
          <p className="text-lg text-slate-600">{text}</p>
        ) : (
          content.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className="flex flex-row justify-start items-center p-4 mb-6"
            >
              <div className="flex flex-col w-2/3 max-w-4xl h-auto max-h-screen">
                <p className="text-3xl font-bold text-black">{item.time}</p>
                <p className="text-2xl font-semibold text-slate-500 mb-2">
                  {item.room !== false
                    ? `${item.block} - ${item.room}`
                    : item.block}
                </p>
                <p className="text-xl">{item.type}</p>
              </div>
              <div className="w-1 h-32 bg-black"></div>
              <div className="flex flex-col text-justify px-5">
                <p className="text-2xl md:text-3xl font-semibold mb-4">
                  {item.title}
                </p>
                <p>{item.text}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
