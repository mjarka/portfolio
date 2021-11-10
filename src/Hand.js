import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import useStore from "./store";
import { useSpring, a, config } from "@react-spring/three";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

export default function Hand(props) {
  // support for media queries
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  // import TV bool
  const showTv = useStore((state) => state.showTv);

  // import state storage
  const index = useStore((state) => state.index);

  // reference for model group
  const group = useRef();
  const pen = useRef();

  // import animations
  const { nodes, materials, animations } = useGLTF("HandSimplyfied.glb");
  const { actions, names } = useAnimations(animations, group);

  // Lerp model between position and rotation
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.position.y = (1 + Math.sin(t / 1.5)) / 15;
    group.current.rotation.x = Math.sin(t / 2) / 8;
    group.current.rotation.y = Math.sin(t / 3) / 5;
  });

  // Play animation once
  useEffect(() => {
    actions[names[index]].setLoop(THREE.LoopOnce, 1);
    actions[names[index]].reset().fadeIn(0.3).play();
    actions[names[index]].clampWhenFinished = true;
    return () => actions[names[index]].fadeOut(0.3);
  }, [index]);

  // make pen invisible in shadow
  useEffect(() => {
    if (index === 1) {
      pen.current.visible = true;
    } else {
      pen.current.visible = false;
    }
  }, [index]);

  // make hand invisible if TV appears
  useEffect(() => {
    showTv ? (group.current.visible = false) : (group.current.visible = true);
  }, [showTv]);

  // lerp opacity for pen with spring
  const { opacity } = useSpring({
    opacity: index !== 1 ? 0 : 1,
  });

  const { spikesOpacity } = useSpring({
    spikesOpacity: index === 6 ? 1 : 0,
  });
  const { fiberColor } = useSpring({
    fiberColor: index === 6 ? "#1f1f24" : "#e87404",
  });

  // animate hand when TV dissapears
  const { scale } = useSpring({
    scale: showTv ? 0.6 : matches ? 1.1 : 1,
    config: config.wobbly,
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <a.group
        position={matches ? [-0.05, -3.2, 0.04] : [-0.05, -3.2, 0.04]}
        scale={scale}
      >
        <primitive object={nodes.Bone042} />
        <a.skinnedMesh
          geometry={nodes.hand.geometry}
          material={materials.Fiber}
          material-color={fiberColor}
          skeleton={nodes.hand.skeleton}
        />
        <skinnedMesh
          geometry={nodes.hand_1.geometry}
          material={materials.Skin}
          skeleton={nodes.hand_1.skeleton}
          castShadow
          receiveShadow
        />
        <a.skinnedMesh
          geometry={nodes.hand_2.geometry}
          material={materials.Bone}
          skeleton={nodes.hand_2.skeleton}
          material-opacity={spikesOpacity}
          material-transparent={true}
        />
        <skinnedMesh
          geometry={nodes.hand_3.geometry}
          material={materials.Blood}
          skeleton={nodes.hand_3.skeleton}
        />
        <group ref={pen}>
          <skinnedMesh
            castShadow
            receiveShadow
            geometry={nodes.hand_4.geometry}
            skeleton={nodes.hand_4.skeleton}
          >
            <a.meshStandardMaterial
              color="#e89f00"
              opacity={opacity}
              transparent={true}
            />
          </skinnedMesh>
          <skinnedMesh
            geometry={nodes.hand_5.geometry}
            skeleton={nodes.hand_5.skeleton}
          >
            <a.meshStandardMaterial
              color="#4a0716"
              opacity={opacity}
              transparent={true}
            />
          </skinnedMesh>
        </group>
        <a.skinnedMesh
          geometry={nodes.hand_6.geometry}
          material={materials.silver}
          material-transparent={true}
          material-opacity={spikesOpacity}
          skeleton={nodes.hand_6.skeleton}
        />
      </a.group>
    </group>
  );
}

useGLTF.preload("HandSimplyfied.glb");
