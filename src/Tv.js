import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import useStore from "./store";
import { useSpring, animated, config } from "@react-spring/three";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

export default function Tv(props) {
  const Tv = useRef();
  const { nodes, materials } = useGLTF("tvsmall.glb");

  // change texture selection for tv screen
  const [circle2, circle3, circle4, mego1, netto1, testPattern] = useTexture([
    "kvTextures/circle2.jpg",
    "kvTextures/circle3.jpg",
    "kvTextures/circle4.jpg",
    "kvTextures/mego1.jpg",
    "kvTextures/netto1.jpg",
    "testPattern.jpg",
  ]);
  circle2.flipY = false;
  circle3.flipY = false;
  testPattern.flipY = false;
  // support for media queries
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  // import current KV selected from state management
  const kv = useStore((state) => state.kv);

  // Manage changing texture on tv screen
  const [tvTexture, setTvTexture] = useState(circle2);

  // import TV bool to change animation on scroll
  const showTv = useStore((state) => state.showTv);
  const index = useStore((state) => state.index);

  // Lerp model between position and rotation
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    Tv.current.position.y = (1 + Math.sin(t / 1.5)) / 15;
    // Tv.current.rotation.x = Math.sin(t / 2) / 12;
    Tv.current.rotation.y = Math.sin(t / 3) / 9;
  });

  // hide Tv when hand appears
  useEffect(() => {
    showTv ? (Tv.current.visible = true) : (Tv.current.visible = false);
  }, [showTv]);

  // manage changing texture on tv screen
  useEffect(() => {
    setTvTexture(testPattern);
    const timer = setTimeout(() => {
      kv === "biedronka" ? setTvTexture(circle2) : setTvTexture(circle3);
    }, 200);
    return () => clearTimeout(timer);
  }, [kv]);

  // define spring to change scale on scroll
  const { scale } = useSpring({
    scale: showTv ? (matches ? 1.0 : 0.9) : 0.4,
    config: config.wobbly,
  });

  // const { scale } = useSpring({
  //   to: { scale: 0.7 },
  //   from: { scale: 0 },
  //   reset: showTv,
  // });

  return (
    <animated.group
      ref={Tv}
      {...props}
      dispose={null}
      scale={scale}
      visible={false}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_1.geometry}
        material={nodes.Cube_1.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_2.geometry}
        material={materials["Material.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002_Curve.geometry}
        material={materials["Material.004"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={nodes.Cylinder003.material}
      />
      <mesh castShadow receiveShadow geometry={nodes.Cube004.geometry}>
        <meshBasicMaterial reflectivity={0} roughness={0} map={tvTexture} />
      </mesh>
    </animated.group>
  );
}

useGLTF.preload("tvsmall.glb");
