import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import useStore from "./store";

function Intro() {
  // import theme and breakpoints for scaling purposes
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
          <Typography variant="h3">{strings.hello}</Typography>
          <Box pt={1}>
            <Typography variant="body1">{strings.intro}</Typography>
          </Box>
          <Box pt={2}>
            <Button variant="contained" color="primary" elevation={0}>
              {strings.contactButton}
            </Button>
          </Box>
        </Grid>
      </Box>
    </>
  );
}

export default Intro;
