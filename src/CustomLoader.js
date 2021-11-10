import { useProgress } from "@react-three/drei";
import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";

import Fade from "@material-ui/core/Fade";
export default function CustomLoader() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  console.log(total);
  return (
    <Fade in={loaded < total}>
      <Box
        position="fixed"
        height={1}
        width={1}
        zIndex="2000"
        className="solidBackground"
        justifyContent="center"
        alignItems="center"
        display="flex"
      >
        <CircularProgress variant="determinate" value={progress} size="3rem" />
      </Box>
    </Fade>
  );
}
