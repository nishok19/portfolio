import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect, useRef } from "react";
import { Group } from "three";
import * as THREE from "three";

useGLTF.preload("/windmill_near_water.glb");

export default function Model({ menuOpened, section }: any) {
  const group = useRef<Group>(null);
  const { nodes, materials, animations, scene } = useGLTF(
    "/windmill_near_water.glb"
  );

  const { actions, clips } = useAnimations(animations, scene);
  const cameraPositionX = useMotionValue(0);
  const cameraPositionY = useMotionValue(0);
  const cameraPositionZ = useMotionValue(0);
  const cameraLookAtX = useMotionValue(0);
  const cameraLookAtY = useMotionValue(0);
  const cameraLookAtZ = useMotionValue(0);

  const framerMotionConfig = {
    type: "spring",
    mass: 2,
    stiffness: 100,
    damping: 50,
    restDelta: 0.0001,
  };

  useEffect(() => {
    actions["Mill|Turning"] && actions["Mill|Turning"].play();
  }, []);

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? 1 : 3, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, menuOpened ? 10 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtY, menuOpened ? 1 : 1, {
      ...framerMotionConfig,
    });
    //
    // if (section == 1) {
    animate(cameraLookAtX, section == 1 ? 3 : -2, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtZ, section == 1 ? 0 : 1, {
      ...framerMotionConfig,
    });
    //
    animate(cameraPositionX, section == 1 ? -3 : 1, {
      ...framerMotionConfig,
    });
    animate(cameraPositionY, section == 1 ? 0.3 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraPositionZ, section == 1 ? 2 : 3, {
      ...framerMotionConfig,
    });
    // }
  }, [menuOpened, section]);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.x = 0;
      group.current.rotation.y = section == 1 ? 1.2 : 2;
      group.current.rotation.z = 0.2;
    }
    state.camera.position.x = cameraPositionX.get();
    state.camera.position.y = cameraPositionY.get();
    state.camera.position.z = cameraPositionZ.get();
    state.camera.lookAt(
      cameraLookAtX.get(),
      cameraLookAtY.get(),
      cameraLookAtZ.get()
    );
    console.log("sectionn : ", section);
  });

  return (
    <motion.group>
      <group ref={group} position={[0, 0, 0]}>
        <primitive object={scene} scale={5} />
      </group>
    </motion.group>
  );
}
