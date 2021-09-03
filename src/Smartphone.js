import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import useStore from "./store";
import { useSpring, animated, config } from "@react-spring/three";

export default function Model(props) {
  const smartphone = useRef();
  const { nodes, materials } = useGLTF("/smartphone.glb");

  // change texture selection for tv screen
  const [img, img2, testPattern] = useTexture([
    "tex.jpg",
    "tex2.jpg",
    "testPattern.jpg",
  ]);
  img2.flipY = false;
  img.flipY = false;
  testPattern.flipY = false;

  // import current KV selected from state management
  const kv = useStore((state) => state.kv);

  // Manage changing texture on tv screen
  const [tvTexture, setTvTexture] = useState(img);
  console.log(tvTexture);

  // support for media queries
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  // import TV bool to change animation on scroll
  const showTv = useStore((state) => state.showTv);
  const index = useStore((state) => state.index);

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

  // manage changing texture on tv screen
  useEffect(() => {
    setTvTexture(testPattern);
    const timer = setTimeout(() => {
      kv === "biedronka" ? setTvTexture(img2) : setTvTexture(img);
    }, 200);
    return () => clearTimeout(timer);
  }, [kv]);

  // define spring to change scale on scroll
  const { scale, rotation } = useSpring({
    scale: showTv ? (matches ? 3.1 : 2.6) : 0.4,
    config: config.wobbly,
    rotation:
      kv === "biedronka"
        ? [-Math.PI / 6, 0, 0]
        : [-Math.PI / 7, 0, -Math.PI / 2],
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
          <meshStandardMaterial roughness={0.3} map={tvTexture} />
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

useGLTF.preload("/smartphone.glb");
