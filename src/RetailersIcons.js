import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import useStore from "./store";
import retailers from "./retailers";

export default function RetailersIcons() {
  return (
    <>
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
                src={retailers[key]["icon"]}
                height="36px"
                className="pointer"
              />
            </Box>
          </Grid>
        );
      })}
    </>
  );
}
