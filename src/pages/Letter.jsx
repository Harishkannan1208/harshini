import { useNavigate } from "react-router-dom";
import NextButton from "../components/NextButton";

export default function Letter() {
  const nav = useNavigate();

  return (
    <section className="letter-page">
      <div className="letter-container">
        <h2>Dear Harshuuuuu,,</h2>

        <p>
          Happy 9th anniversary babyy 💖. I can’t believe it’s been 9 years since we first met . I am very luck to have such a amazing 
          partner like you in my life. You are my best friend, my confidant, and my soulmate. I am so grateful for all the love and support you have given me over the years.
        </p>

        <p>
          Every laugh we shared, every memory we created, 
          and every challenge we faced together made us stronger.
        </p>

        <p>
          I don’t just love you for who you are —
          I love you for who I become when I am with you.
        </p>

        <p>
          Forever yours, <br />
          ❤️
        </p>
      </div>

      <NextButton
        text="Next Page 💖"
        onClick={() => nav("/memories")}
      />
    </section>
  );
}
