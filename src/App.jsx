import { useEffect, useState } from "react";
import { Transition } from "react-transition-group";
import Map from "./screens/Map";
import Tour from "./screens/Tour";
import Controls from "./components/Controls";
import Overlay from "./components/Overlay";
import logo from "/bakhawan-text.png";
import Weather from "./components/Weather";
import vector_map_bg from "/bakhawan-map.png";

function App() {
  const [isStarted, setIsStarted] = useState(true);
  const [audio] = useState(new Audio("/mangroves_audio.mp3"));
  const [isViewing, setIsViewing] = useState(false);
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <>
          <div className="absolute inset-0 backdrop-blur-sm bg-black/70 z-10"></div>
          <div
            className="absolute inset-0 flex justify-center items-center flex-col"
            style={{
              backgroundImage: `url(${vector_map_bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${vector_map_bg})`,
                zIndex: 0,
              }}
            ></div>

            <img src="/Loading.png" alt="" className="w-96 z-10" />
          </div>
        </>
      ) : (
        <div className="overflow-hidden">
          <Transition
            in={isViewing}
            timeout={isViewing ? duration : duration * 3}
          >
            {(state) => (
              <div
                className="relative w-screen h-screen"
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state],
                }}
              >
                {isStarted && (
                  <Overlay setIsStarted={setIsStarted} audio={audio} />
                )}
                <img
                  src={logo}
                  alt="logo"
                  className="w-40 absolute bottom-0 left-2 z-10"
                />
                <Map setIsViewing={setIsViewing} setLink={setLink} />
                <Controls audio={audio} />
                {/* <DrawerMenu isOpen={isOpen} setIsOpen={setIsOpen} /> */}
                <Weather />
              </div>
            )}
          </Transition>

          <Transition
            in={isViewing}
            timeout={isViewing ? duration * 3 : duration}
          >
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
      )}
    </>
  );
}

export default App;
