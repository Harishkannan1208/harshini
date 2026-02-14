import { useEffect, useRef } from "react";
import music from "../assets/music.mp3";

export default function MusicPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    window.startMusic = () => {
      if (audioRef.current) {
        audioRef.current.muted = false;
        audioRef.current.play().catch((err) => {
          console.log("Autoplay blocked:", err);
        });
      }
    };
  }, []);

  return (
    <audio ref={audioRef} loop preload="auto">
      <source src={music} type="audio/mpeg" />
    </audio>
  );
}
