import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import useStore from "./store";
import retailers from "./retailers";

export default function RetailersIcons() {
  const strings = useStore((state) => state.strings);
  const kv = useStore((state) => state.kv);
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
            <Box position="relative" display="flex" p={1}>
              <svg
                height="46px"
                className="pointer"
                fill={key === kv ? "#fea907" : "#c4840a"}
                viewBox={retailers[key]["viewbox"]}
              >
                {retailers[key]["icon"]}
              </svg>
            </Box>
          </Grid>
        );
      })}
    </>
  );
}
