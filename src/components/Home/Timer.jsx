import { useState, useEffect } from "react";
import img from "../../assets/banners/5.png"
import imgArcosFatec from "../../assets/grafismo/Arcos_Fatecdonalds.svg";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-06-23T00:00:00");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    // Atualiza a cada segundo
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const styleDiv = "flex flex-col justify-center items-center text-sm md:text-md font-semibold text-slate-500"

  const styleTimer = "text-2xl md:text-4xl font-bold text-black"
  return (
    <div className="flex flex-col justify-center items-center w-full relative">
      {/* bg-red-500  */}
      <img src={img} alt="" className="w-full max-h-[480px] object-cover"/>
      <div className="flex justify-evenly items-center shadow-xl w-11/12 h-28 bg-white -mt-14 md:px-60">
      {/* absolute -bottom-8rem  */}
        <div className={styleDiv}>
          <p>Dias:</p>
          <span className={styleTimer}>{timeLeft.days}</span>
        </div>

        <div className={styleDiv}>
          <p>Horas:</p>
          <span className={styleTimer}>{timeLeft.hours}</span>
        </div>

        <div className={styleDiv}>
          <p>Minutos:</p>
          <span className={styleTimer}>{timeLeft.minutes}</span>
        </div>

        <div className={styleDiv}>
          <p>Segundos:</p>
          <span className={styleTimer}>{timeLeft.seconds}</span>
        </div>
      </div>

      <figure className="px-8 w-full flex justify-center">
        <img src={imgArcosFatec} alt="" className="rotate-180" />
      </figure>
    </div>
  );
}