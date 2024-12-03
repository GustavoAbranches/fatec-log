import { useState, useEffect } from "react";
import Carrosel from "./Carrosel";
// 

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-06-24T21:00:00");

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
 // Timer.jsx
return (
  <div className="flex flex-col justify-center items-center w-full h-[400px] mt-14"> {/* Container principal */}
      <Carrosel />
      <div className=" w-11/12 max-w-4xl">
          <div className="flex justify-evenly items-center shadow-xl w-full h-28 bg-white rounded-lg">
              {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 ? (
                  <span className="text-4xl font-semibold">O Evento começou</span>
              ) : (
                  <>
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
                  </>
              )}
          </div>
      </div>
  </div>
);
}
