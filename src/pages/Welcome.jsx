import { useNavigate } from "react-router-dom";
import NextButton from "../components/NextButton";
import hero from "../assets/front.jpg";

export default function Welcome() {
  const nav = useNavigate();

  return (
    <section className="welcome">
      <div
        className="welcome-photo"
        style={{ backgroundImage: `url(${hero})` }}
      />
      <div className="welcome-content glass">
        <h1>From This Moment 💖</h1>
     
        <p>This story is written only for you. </p>

           <h4> please read in private!!!!</h4>
        <NextButton
          text="Next Page 💕"
          onClick={() => {
            window.startMusic();
            nav("/how-we-met");
          }}
        />
      </div>
    </section>
  );
}
