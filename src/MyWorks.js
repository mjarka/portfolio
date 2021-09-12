import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import retailers from "./retailers";
import useStore from "./store";
import InView from "react-intersection-observer";
import Loader from "./Loader";
import RetailersIcons from "./RetailersIcons";

function MyWorks() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  // import current KV selected from state management
  const kv = useStore((state) => state.kv);

  // import store with states to change language
  const strings = useStore((state) => state.strings);
  return (
    <>
      {/* Change flex or inline on breakpoints */}
      <Box
        position="relative"
        px={4}
        height="100vh"
        display="flex"
        alignItems={matches ? "flex-start" : "center"}
      >
        <InView
          as="div"
          threshold={0.6}
          onChange={(inView, entry) => {
            inView && useStore.setState({ index: 1 });
            inView
              ? useStore.setState({ showTv: true })
              : useStore.setState({ showTv: false });
          }}
        >
          <Grid item xs={8} lg={4} order={{ xs: 22, lg: 1 }}>
            <Typography variant="h3">{strings.myWorksHeader}</Typography>
            <Box pt={1} zIndex="tooltip">
              <Typography variant="body1">{strings.myWorks}</Typography>
              <Loader />
              <Grid container alignItems="center" justifyContent="center">
                {/* Map through retailers to show their icon and set state onClick */}
                <RetailersIcons />
                <Box pt={2}>
                  <Typography variant="body2">{strings[kv]}</Typography>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </InView>
      </Box>
    </>
  );
}

export default MyWorks;
