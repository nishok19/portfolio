import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group } from "three";
import * as THREE from "three";

useGLTF.preload("/windmill_near_water.glb");

export default function Model() {
  const group = useRef<Group>(null);
  const { nodes, materials, animations, scene } = useGLTF(
    "/windmill_near_water.glb"
  );

  const { actions, clips } = useAnimations(animations, scene);
  const scroll = useScroll();

  useEffect(() => {
    // console.log(actions, clips, "what");
    actions["Mill|Turning"] && actions["Mill|Turning"].play();
  }, []);

  useFrame(() => {
    // actions["Mill|Turning"] &&
    //   (actions["Mill|Turning"].time =
    //     (actions["Mill|Turning"]?.getClip().duration * scroll.offset) / 3);
    if (group.current) {
      group.current.rotation.x = 0;
      group.current.rotation.y = 1.5;
      group.current.rotation.z = 0.3;
    }
  });

  return (
    <group ref={group} position={[2, 0, 0]}>
      <primitive object={scene} scale={5} />
    </group>
  );
}
