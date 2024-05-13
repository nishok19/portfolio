import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect, useRef } from "react";
import { Group } from "three";
import * as THREE from "three";

useGLTF.preload("/windmill_near_water.glb");

export default function Model({ menuOpened }: any) {
  const group = useRef<Group>(null);
  const { nodes, materials, animations, scene } = useGLTF(
    "/windmill_near_water.glb"
  );

  const { actions, clips } = useAnimations(animations, scene);
  const cameraPositionX = useMotionValue(0);
  const cameraLookAtX = useMotionValue(0);
  const cameraLookAtY = useMotionValue(0);

  const framerMotionConfig = {
    type: "spring",
    mass: 2,
    stiffness: 100,
    damping: 50,
    restDelta: 0.0001,
  };

  useEffect(() => {
    // console.log(actions, clips, "what");
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
  }, [menuOpened]);

  useFrame((state) => {
    // actions["Mill|Turning"] &&
    //   (actions["Mill|Turning"].time =
    //     (actions["Mill|Turning"]?.getClip().duration * scroll.offset) / 3);
    if (group.current) {
      group.current.rotation.x = 0;
      group.current.rotation.y = 2;
      group.current.rotation.z = 0.3;
    }
    //

    state.camera.position.x = cameraPositionX.get();
    state.camera.position.y = 0;
    state.camera.position.z = 3;
    state.camera.lookAt(cameraLookAtX.get(), cameraLookAtY.get(), 0);
  });

  return (
    <motion.group>
      <group ref={group} position={[2, 0, 0]}>
        <primitive object={scene} scale={5} />
      </group>
    </motion.group>
  );
}
