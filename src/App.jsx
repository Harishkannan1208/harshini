import { BrowserRouter, Routes, Route } from "react-router-dom";
import MusicPlayer from "./components/MusicPlayer";

import Welcome from "./pages/Welcome";
import HowWeMet from "./pages/HowWeMet";
import Journey from "./pages/Journey";
import Letter from "./pages/Letter";
import Memories from "./pages/Memories";
import Surprise from "./pages/Surprise";

export default function App() {
  return (
    <BrowserRouter>
      <MusicPlayer />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/how-we-met" element={<HowWeMet />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/surprise" element={<Surprise />} />
      </Routes>
    </BrowserRouter>
  );
}
