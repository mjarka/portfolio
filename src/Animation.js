import { ContactShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Hand from "./Hand";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Smartphone from "./Smartphone";
function Animation() {
  // support for media queries
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Canvas
        shadows
        camera={{
          position: [-2, 2.3, 5],
          fov: 45,
          far: 14.2,
          near: 3,
        }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[8, 6, 3]}
          intensity={2}
          castShadow
          shadow-mapSize-height={2048}
          shadow-mapSize-width={2048}
        />

        <directionalLight position={[-12, -1, -3]} intensity={1} />
        <Suspense fallback={null}>
          <Smartphone />
          {/* <Rig> */}
          <Hand scale={[0.2, 0.2, 0.2]} />
          <ContactShadows
            position={matches ? [0, -1.8, 0] : [0, -1.49, 0]}
            width={5}
            height={4}
            opacity={0.2}
            blur={2}
            far={20}
            rotation={[Math.PI / 2, 0, 0]}
          />
        </Suspense>

        {/* <OrbitControls autoRotate /> */}
      </Canvas>
    </>
  );
}

export default Animation;
