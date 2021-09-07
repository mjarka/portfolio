import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import useStore from "./store";
import { useSpring, animated, config } from "@react-spring/three";
import retailers from "./retailers";
import TextureChanger from "./TextureChanger";
export default function Model(props) {
  const smartphone = useRef();
  const { nodes, materials } = useGLTF("smartphone.glb");

  // import current KV selected from state management
  const kv = useStore((state) => state.kv);

  // support for media queries
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  // import TV bool to change animation on scroll
  const showTv = useStore((state) => state.showTv);

  // hide Tv when hand appears
  useEffect(() => {
    showTv
      ? (smartphone.current.visible = true)
      : (smartphone.current.visible = false);
  }, [showTv]);

  // Lerp model between position and rotation
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    smartphone.current.position.y = (1 + Math.sin(t / 1.5)) / 15;
    // Tv.current.rotation.x = Math.sin(t / 2) / 12;
    smartphone.current.rotation.y = Math.sin(t / 3) / 9;
  });

  // define spring to change scale on scroll
  const { scale, rotation } = useSpring({
    scale: showTv ? (matches ? 3.1 : 2.6) : 0.4,
    config: config.wobbly,
    rotation: retailers[kv]["horizontal"]
      ? [-Math.PI / 7, 0, -Math.PI / 2]
      : [-Math.PI / 6, 0, 0],
  });

  return (
    <animated.group
      ref={smartphone}
      {...props}
      dispose={null}
      scale={scale}
      visible={false}
    >
      <animated.group rotation={rotation}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_2.geometry}
          material={materials["Material.002"]}
        >
          <TextureChanger />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_3.geometry}
          material={materials["Material.003"]}
        />
      </animated.group>
    </animated.group>
  );
}

useGLTF.preload("smartphone.glb");
