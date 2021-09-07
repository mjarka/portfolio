import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import useStore from "./store";
import InView from "react-intersection-observer";
function FreeTime() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  // import text strings
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
        <InView
          as="div"
          threshold={0.5}
          onChange={(inView, entry) => {
            inView && useStore.setState({ index: 6 });
          }}
        >
          <Grid item xs={8} lg={4} order={{ xs: 22, lg: 1 }}>
            <Typography variant="h3">{strings.freeTimeHeader}</Typography>
            <Box pt={2}>
              <Typography variant="body1">{strings.freeTime}</Typography>
            </Box>
          </Grid>
        </InView>
      </Box>
    </>
  );
}

export default FreeTime;
