import { useState } from "react";
import ring from "../assets/gift.png";

export default function Surprise() {
  const [pwd, setPwd] = useState("");
  const [open, setOpen] = useState(false);

  if (open) {
    return (
      <section className="center proposal">
        <h1 className="proposal-text">Are you ready for the surprise??</h1>
        <img src={ring} className="ring" />
      </section>
    );
  }

  return (
    <section className="center glass">
      <input
        type="password"
        placeholder="Our forever word 💕"
        onChange={(e) => setPwd(e.target.value)}
      />
      <button
        className="next-btn"
        onClick={() => pwd === "ckbakery" && setOpen(true)}
      >
        Unlock 💞
      </button>
    </section>
  );
}
