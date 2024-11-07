import { useState } from "react";
import { Transition } from "react-transition-group";
import Map from "./screens/Map";
import Tour from "./screens/Tour";
import Controls from "./components/Controls";
import DrawerMenu from "./components/Drawer";
import Overlay from "./components/Overlay";
import logo from "/logo.png";
import Weather from "./components/Weather";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isStarted, setIsStarted] = useState(true);
  const [audio] = useState(new Audio("/mangroves_audio.mp3"));
  const [isViewing, setIsViewing] = useState(false);
  const [link, setLink] = useState("");

  const duration = 300;

  const defaultStyle = {
    transition: `opacity 1000ms ease-in-out, transform 1000ms ease-in-out`,
    opacity: 0,
    transform: "scale(1)",
  };

  const transitionStyles = {
    entering: { opacity: 1, transform: "scale(1)" },
    entered: { opacity: 0, transform: "scale(5)" },
    exiting: { opacity: 0, transform: "scale(5)" },
    exited: { opacity: 1, transform: "scale(1)" },
  };

  return (
    <div className="overflow-hidden">
      <Transition in={isViewing} timeout={isViewing ? duration : duration * 3}>
        {(state) => (
          <div
            className="relative w-screen h-screen"
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            {isStarted && <Overlay setIsStarted={setIsStarted} audio={audio} />}
            <img
              src={logo}
              alt="logo"
              className="w-48 h-48 absolute bottom-0 left-2 z-10"
            />
            <Map setIsViewing={setIsViewing} setLink={setLink} />
            <Controls audio={audio} />
            <DrawerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            <Weather />
          </div>
        )}
      </Transition>

      <Transition in={isViewing} timeout={isViewing ? duration * 3 : duration}>
        {(state) => (
          <Tour
            state={state}
            setIsViewing={setIsViewing}
            audio={audio}
            link={link}
          />
        )}
      </Transition>
    </div>
  );
}

export default App;
