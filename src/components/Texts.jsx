import { textsHome } from "../util/texts";

export default function Texts() {
  return (
    <div className="p-4">
      {textsHome.map((text, index) => (
        <div
          className="flex flex-col md:flex-row justify-evenly items-center w-full h-auto md:h-96 p-10 mt-32"
          key={index}
        >
          <div className="flex flex-col items-start justify-center mb-8 md:mb-0">
            <p className="text-blue-600 font-medium mb-2 ">{text.title}</p>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">
              {text.subtitle}
            </h1>
          </div>
          <div className="space-y-6 text-gray-700 leading-relaxed w-full md:w-3/4">
            <p>{text.para1}</p>
            <p>{text.para2}</p>
            <p>{text.para3}</p>
          </div>
        </div>
      ))}
    </div>
  );
}