import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import useStore from "./store";

function HowIWork() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  // import store with states to change language
  const strings = useStore((state) => state.strings);
  return (
    <>
      {/* Change flex or inline on breakpoints */}
      <Box
        px={4}
        height="90vh"
        display="flex"
        alignItems={matches ? "flex-start" : "center"}
      >
        <Grid item xs={8} lg={4} order={{ xs: 22, lg: 1 }}>
          <Typography variant="h3">{strings.howIWorkHeader}</Typography>
          <Box pt={1}>
            <Typography variant="body1">{strings.howIWork}</Typography>
          </Box>
        </Grid>
      </Box>
    </>
  );
}

export default HowIWork;
