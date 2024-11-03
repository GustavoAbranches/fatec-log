import { textData } from "../util/procramacaotext";

export default function GradeProgramacao() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row justify-center items-center gap-7">
        <p className="text-4xl font-semibold">Grade de Programação</p>
        {textData.map((d, index) => {
          return (
            <>
              <div
                key={index}
                className="flex flex-col justify-center items-center"
              >
                <p className="text-3xl font-semibold text-slate-500">DIA</p>
                <p className="text-3xl font-semibold text-slate-500">{d.day}</p>
              </div>
            </>
          );
        })}
      </div>
      <hr className="border-t-4 border-red-700 w-1/2 my-10" />

      <div>
        {textData.map((d, index) => {
          return (
            <div key={index} className="flex flex-col px-52 justify-center items-center">
              <p className="text-3xl font-semibold text-slate-500 py-10">
                DIA {d.day} {d.name}
              </p>
              <div>
                {d.content.map((item, itemIndex) => {
                  return (
                    <>
                      <div className="flex flex-row w-full h-full justify-center items-center" key={itemIndex}>
                        <div className="flex flex-col w-1/5 m-5 justify-start items-start">
                          <p className="text-4xl font-semibold text-slate-500 "> {item.block}</p>
                          <p className="text-3xl font-medium text-slate-500 justify-center items-center"> {item.room}</p>
                        </div>

                        <div className="border-l-2 border-slate-500 h-28"> </div>

                        <div className="flex flex-col w-4/5 m-5 text-left">
                            <p className="text-4xl font-semibold">{item.title}</p>
                            <p>{item.text}</p>
                            
                        </div>
                      </div>
                      
                    </>
                  );
                })}
              </div>
              <hr className="border-t-4 border-red-700 w-3/4 my-10 justify-center" />
            </div>
            
          );
        })}
      </div>
    </div>
  );
}
