import { useEffect, useState } from "react";
import Map from "./screens/Map";
import Controls from "./components/Controls";
import DrawerMenu from "./components/Drawer";
import Overlay from "./components/Overlay";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isStarted, setIsStarted] = useState(true);
  const [audio] = useState(new Audio("../public/mangroves_audio.mp3"));

  return (
    <div className="relative w-screen h-screen">
      {isStarted && <Overlay setIsStarted={setIsStarted} audio={audio} />}
      <Map setIsOpen={setIsOpen} />
      <Controls audio={audio} />
      <DrawerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default App;
