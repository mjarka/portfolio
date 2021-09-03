import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import useStore from "./store";
function Contact() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  // import text strings
  const strings = useStore((state) => state.strings);
  return (
    <>
      {/* Change flex or inline on breakpoints */}
      <Box
        px={4}
        pt={3}
        pb={4}
        height={matches ? "30vh" : "100vh"}
        display="flex"
        alignItems={matches ? "flex-end" : "center"}
      >
        <Grid item xs={8} lg={4} order={{ xs: 22, lg: 1 }}>
          <Typography variant="h3">{strings.contactHeader}</Typography>
          <Box pt={2}>
            <Typography variant="body1">{strings.contact}</Typography>
          </Box>
          <Box pt={2}>
            <Button variant="contained" color="primary" elevation={0}>
              KONTAKT
            </Button>
          </Box>
        </Grid>
      </Box>
    </>
  );
}

export default Contact;
