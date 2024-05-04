import { Canvas, useThree } from "@react-three/fiber";
import Model from "./Model";
import { Suspense, useEffect, useState } from "react";
import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  Scroll,
  ScrollControls,
  useProgress,
} from "@react-three/drei";
import Home from "../pages/Home";
import MainPage from "./MainPage";
import Menu from "./Menu";
import ScrollManager from "./ScrollManager";

function Loader() {
  const { progress, active } = useProgress();

  return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

export default function Scene() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <>
      <Canvas gl={{ antialias: true }} dpr={[1, 1.5]}>
        <color attach="background" args={["#f0ffeb"]} />
        <directionalLight position={[-5, -5, 5]} intensity={4} />
        <ambientLight intensity={3} />
        <Suspense fallback={<Loader />}>
          <ScrollControls damping={0.2} pages={3}>
            <ScrollManager section={section} onSectionChange={setSection}>
              <Scroll>
                <Model />
              </Scroll>
              <Scroll html>
                <MainPage />
              </Scroll>
            </ScrollManager>
          </ScrollControls>
          {/* <OrbitControls enableZoom={false} /> */}
        </Suspense>
      </Canvas>

      <Menu
        onSectionChange={setSection}
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
      />
    </>
  );
}
