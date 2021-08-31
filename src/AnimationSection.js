import React from "react";
import { Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Animation from "./Animation";
function AnimationSection() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      position="fixed"
      width="100vw"
      className={matches ? "gradient" : "nic"}
    >
      <Grid item xs={12} md={6}>
        <Box height={matches ? "60vh" : "100vh"} zIndex="tooltip">
          <Animation />
        </Box>
      </Grid>
    </Box>
  );
}

export default AnimationSection;
