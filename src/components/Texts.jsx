import { textsHome } from "../util/texts";

export default function Texts() {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      {textsHome.map((text, index) => (
        <div
          className="flex flex-col md:flex-row items-center justify-evenly w-auto h-auto md:h-96 p-10 mt-32 max-w-[1250px]"
          key={index}
        >
          <div className="flex flex-col items-start justify-center mb-8 md:mb-0">
            <div className="flex flex-col w-full h-full md:mb-44">
              <p className="mb-2 font-medium text-blue-600">{text.title}</p>
            
            <h1 className="font-bold text-2xl md:text-4xl text-gray-900 mb-8">
              {text.subtitle}
            </h1>
            </div>
          </div>
          <div className="w-full md:w-3/4 space-y-6 text-gray-700 leading-relaxed">
            <p>{text.para1}</p>
            <p>{text.para2}</p>
            <p>{text.para3}</p>
          </div>
        </div>
      ))}
    </div>
  );
}