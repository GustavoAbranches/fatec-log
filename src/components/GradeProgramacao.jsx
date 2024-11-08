import { useState } from "react";

import { textData } from "../util/programacaoText";

export default function GradeProgramacao() {
  const [content, setContent] = useState([]);

  return (
    <div className="flex flex-col justify-center items-center w-full h-auto mt-20 ">
      <div>
        {textData.map((btnDay) => {
          return (
            <>
              <button
                onClick={() => setContent(btnDay.content)}
                className="w-16 h-16 bg-slate-500 m-3 hover:bg-slate-600 text-white"
              >
                {btnDay.day}
              </button>
            </>
          );
        })}
      </div>

      <div className="flex flex-col justify-center items-center">
        <hr className="border-t-4 border-slate-700 w-1/2 my-5" />
        {content.length === 0
          ? "Clique em um botão para ver os eventos de cada dia."
          : content.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex flex-col items-center w-2/4 p-4 mx-60 h-auto gap-3 border-solid shadow-xl"
              >
                <p className="text-3xl font-semibold text-slate-500">
                  {item.block}
                </p>
                <p className="text-2xl font-medium text-slate-500">
                  {item.room}
                </p>
                <p className="text-2xl md:text-3xl font-semibold">{item.title}</p>
                <div className=" flex text-justify px-5">
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
        <hr className="border-t-4 border-slate-700 w-1/2 my-5" />
      </div>
    </div>
  );
}
