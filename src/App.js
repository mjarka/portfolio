import React from "react";
import { Grid, Typography, Link } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useProgress } from "@react-three/drei";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./theme";

import AnimationSection from "./AnimationSection";
import Intro from "./Intro";
import Contact from "./Contact";
import HowIWork from "./HowIWork";
import FreeTime from "./FreeTime";
import LanguageChange from "./LanguageChange";
import MyWorks from "./MyWorks";
import CustomLoader from "./CustomLoader";
import Fade from "@material-ui/core/Fade";

function App() {
  // import progress for 3d from drei
  const { loaded } = useProgress();
  // styles for loader bar
  // const loaderStyle = {
  //   background: "rgb(86, 84, 82)",
  //   height: "100vh",
  //   position: "fixed",
  // };
  // const bar = { background: "#fea907", width: "100%" };
  // const inner = { background: "#2e2928", width: "100%" };
  return (
    <ThemeProvider theme={theme}>
      <CustomLoader />
      {/* <Loader
        containerStyles={loaderStyle}
        dataInterpolation={(p) => `Wczytuję ${p.toFixed(0)}%`}
        barStyles={bar}
        innerStyles={inner}
      /> */}

      <CssBaseline />
      <LanguageChange />
      <Fade in={loaded === 32}>
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
          <Box justifyContent="center" zIndex="tooltip" position="relative">
            <Typography display="block" variant="caption" align="center">
              {"Stronkę zaprojektowałem i zakodowałem w "}
              <Link
                href="https://reactjs.org/"
                variant="caption"
                onClick={() => {}}
              >
                React
              </Link>
              {" i "}
              <Link
                variant="caption"
                href="https://material-ui.com/"
                onClick={() => {}}
              >
                MaterialUi
              </Link>
              {" oraz przy pomocy "}
              <Link
                variant="caption"
                href="https://threejs.org/"
                onClick={() => {}}
              >
                ThreeJs
              </Link>
              {" i "}
              <Link
                variant="caption"
                href="https://react-spring.io/"
                onClick={() => {}}
              >
                React Spring
              </Link>
            </Typography>
          </Box>
        </Box>
      </Fade>
    </ThemeProvider>
  );
}

export default App;
