import React from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import theme from "./theme";
import Box from "@material-ui/core/Box";
import AnimationSection from "./AnimationSection";
import Intro from "./Intro";
import Contact from "./Contact";
import HowIWork from "./HowIWork";
import FreeTime from "./FreeTime";
import LanguageChange from "./LanguageChange";
import MyWorks from "./MyWorks";

function App() {
  // support for media queries

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LanguageChange />
      <Box>
        <AnimationSection />
        <Grid container>
          <Grid item xs={12} md={6}>
            {/* TO ROBI ZA ZAŚLEPKĘ DO FIXED */}
            <Box height="60vh" zIndex="tooltip"></Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Intro />

            <HowIWork />

            <MyWorks />
            <FreeTime />
            <Contact />
          </Grid>
        </Grid>
        <Box justifyContent="center">
          <Typography display="block" variant="caption" align="center">
            Stronkę zaprojektowałem i zakodowałem w React i MaterialUi oraz przy
            pomocy ThreeJs i Spring.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
