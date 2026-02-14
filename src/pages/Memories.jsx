import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NextButton from "../components/NextButton";
import img1 from "../assets/photos/1.jpg";
import img2 from "../assets/photos/2.jpg";
import img3 from "../assets/photos/3.jpg";
import img4 from "../assets/photos/4.jpg";
import img5 from "../assets/photos/5.jpg";
import img6 from "../assets/photos/6.jpg";
import img7 from "../assets/photos/7.jpg";
import img8 from "../assets/photos/8.jpg";
import img9 from "../assets/photos/9.jpg";
import img10 from "../assets/photos/10.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

export default function Memories() {
  const [i, setI] = useState(0);
  const nav = useNavigate();

  useEffect(() => {
    const t = setInterval(() => {
      setI((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(t);
  }, []);

  return (
    <section className="center">
      <img src={images[i]} className="album-img" />
      <NextButton
        text="Next Page 💞"
        onClick={() => nav("/surprise")}
      />
    </section>
  );
}
