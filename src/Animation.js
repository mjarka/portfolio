import { ContactShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Hand from "./Hand";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Tv from "./Tv";
function Animation() {
  // support for media queries
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Canvas camera={{ position: [-2, 2.3, 5], fov: 45 }}>
      <directionalLight position={[8, 6, 3]} intensity={2} />
      <directionalLight position={[-12, 1, 3]} intensity={1} />
      <Suspense fallback={null}>
        <Tv />
        {/* <Rig> */}
        <Hand scale={[0.2, 0.2, 0.2]} />
        <ContactShadows
          position={matches ? [0, -1.8, 0] : [0, -1.49, 0]}
          width={4}
          height={4}
          opacity={0.2}
          blur={2}
          far={20}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </Suspense>

      {/* <OrbitControls autoRotate /> */}
    </Canvas>
  );
}

export default Animation;
