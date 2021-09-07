import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import useStore from "./store";
import InView from "react-intersection-observer";
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
        <InView
          as="div"
          threshold={0.5}
          onChange={(inView, entry) => {
            inView && useStore.setState({ index: 0 });
          }}
        >
          <Grid item xs={8} lg={4} order={{ xs: 22, lg: 1 }}>
            <Typography variant="h3">{strings.contactHeader}</Typography>
            <Box pt={2}>
              <Typography variant="body1">
                {strings.contact} <span className="accent">{strings.mail}</span>
              </Typography>
            </Box>
            <Box pt={2}>
              <Button
                variant="contained"
                color="primary"
                elevation={0}
                // onClick={() => {
                //   useStore.setState({ index: getRandomIntInclusive(3, 5) });
                // }}
              >
                KONTAKT
              </Button>
            </Box>
          </Grid>
        </InView>
      </Box>
    </>
  );
}

export default Contact;
