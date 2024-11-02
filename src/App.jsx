import { useState } from "react";
import Map from "./screens/Map";
import Controls from "./components/Controls";
import DrawerMenu from "./components/Drawer";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen w-screen relative">
      <Map setIsOpen={setIsOpen} />
      <Controls />
      <DrawerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default App;
