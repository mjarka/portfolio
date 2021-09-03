import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import retailers from "./retailers";
import useStore from "./store";

function MyWorks() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  // import current KV selected from state management
  const kv = useStore((state) => state.kv);
  console.log(kv);

  // import store with states to change language
  const strings = useStore((state) => state.strings);
  return (
    <>
      {/* Change flex or inline on breakpoints */}
      <Box
        position="relative"
        px={4}
        height="90vh"
        display="flex"
        alignItems={matches ? "flex-start" : "center"}
      >
        <Grid item xs={8} lg={4} order={{ xs: 22, lg: 1 }}>
          <Typography variant="h3">{strings.myWorksHeader}</Typography>
          <Box pt={1} zIndex="tooltip">
            <Typography variant="body1">{strings.myWorks}</Typography>

            <Grid container alignItems="center" justifyContent="center">
              {/* Map through retailers to show their icon and set state onClick */}
              {Object.keys(retailers).map(function (key) {
                return (
                  <Grid
                    key={key}
                    item
                    xs={3}
                    sm={3}
                    onClick={() => useStore.setState({ kv: key })}
                  >
                    <Box pr={2} pt={2}>
                      <img
                        src={retailers[key]}
                        height="36px"
                        className="pointer"
                      />
                    </Box>
                  </Grid>
                );
              })}
              <Box pt={2}>
                <Typography variant="body2">{strings[kv]}</Typography>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </>
  );
}

export default MyWorks;
