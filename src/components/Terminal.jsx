import { useEffect, useRef, useState } from "react";

const texts = [
  "Rendszer inicializálása...",
  "Tűzfalak megkerülése...",
  "Fejlesztői mód engedélyezése...",
  "Forráskód betöltése...",
  "Portfólió felület telepítése...",
  "Kreativitás betöltése...",
  "Frontend kapcsolat létrehozása...",
  "Komponensek renderelése...",
  "Üdvözöllek Horváth Dávid portfólió oldalán!"
];


export default function TerminalIntro({ onFinish, onSkip}) {
  const [started, setStarted] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!started) return;

    const audio = audioRef.current;
    audio.play();

    const stopTimeout = setTimeout(() => {
      audio.pause();
      audio.currentTime = 0;
      onFinish(); 
    }, 17000);
    return () => clearTimeout(stopTimeout);
  }, [started, onFinish]);

  useEffect(() => {
    if (!started) return;

    if (index < texts.length) {
      const timeout = setTimeout(() => {
        if (charIndex < texts[index].length) {
          setCurrentText((prev) => prev + texts[index][charIndex]);
          setCharIndex((prev) => prev + 1);
        }
      }, 50);

      if (charIndex === texts[index].length) {
        setTimeout(() => {
          setCurrentText(""); 
          setCharIndex(0);
          setIndex((prev) => prev + 1);
        }, 450);
      }

      return () => clearTimeout(timeout);
    }
  }, [charIndex, index, started]);



  
  const skipTerminal = () => {
    onSkip();
  }

  return (
    <div className="w-screen h-screen bg-black text-green-400 font-mono flex flex-col items-center justify-center text-lg px-4">
      {started ? (
        <>
          <div className="animate-pulse text-base sm:text-lg md:text-xl lg:text-2xl max-w-screen-md text-center break-words">{currentText}|</div>
          <audio ref={audioRef} src="/audio/music.mp3" />

          <button className="mt-10" onClick={skipTerminal}>Átugrás</button>

        </>
      ) : (
        <button
          onClick={() => setStarted(true)}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-500 transition"
        >
          Oldal megtekintése
        </button>
      )}
    </div>
  );
}
