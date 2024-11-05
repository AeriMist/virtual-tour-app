import { useEffect, useState } from "react";
import Map from "./screens/Map";
import Controls from "./components/Controls";
import DrawerMenu from "./components/Drawer";
import Overlay from "./components/Overlay";
import logo from "../public/logo.png";
import Weather from "./components/Weather";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isStarted, setIsStarted] = useState(true);
  const [audio] = useState(new Audio("../public/mangroves_audio.mp3"));

  return (
    <div className="relative w-screen h-screen relative">
      {isStarted && <Overlay setIsStarted={setIsStarted} audio={audio} />}
      <img
        src={logo}
        alt=""
        className="w-48 h-48 absolute bottom-0 left-2 z-10"
      />
      <Map setIsOpen={setIsOpen} />
      <Controls audio={audio} />
      <DrawerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <Weather />
    </div>
  );
}

export default App;
