export default function Supporters() {

  const styleSupporters = 'w-16 h-16 md:w-1/6 md:h-36 bg-orange-500'
  const styleDiv = 'flex flex-row w-full h-44 justify-around items-center px-14 md:my-10'
    return(
        <div className="my-24">
        <h1 className="font-semibold text-2xl md:text-3xl ml-14">Apoiadores</h1>
        <div className={styleDiv}>
          <div className={styleSupporters}></div>
          <div className={styleSupporters}></div>
          <div className={styleSupporters}></div>
          <div className={styleSupporters}></div>
        </div>
        <h1 className="font-semibold text-2xl md:text-3xl ml-14 mt-20">Patrocinadores</h1>
        <div className={styleDiv}>
        <div className={styleSupporters}></div>
          <div className={styleSupporters}></div>
          <div className={styleSupporters}></div>
          <div className={styleSupporters}></div>
        </div>
      </div>
    );
}