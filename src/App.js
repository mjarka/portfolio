import React, { useEffect } from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import theme from "./theme";
import Box from "@material-ui/core/Box";
import AnimationSection from "./AnimationSection";
import Intro from "./Intro";
import { InView } from "react-intersection-observer";
import useStore from "./store";
import Contact from "./Contact";
import HowIWork from "./HowIWork";
import LanguageChange from "./LanguageChange";
import MyWorks from "./MyWorks";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

function App() {
  // support for media queries

  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  // import index from blobal state storage
  const index = useStore((state) => state.index);
  // check if TV should be visible
  const showTv = useStore((state) => state.showTv);

  // disable tv on first load
  useEffect(() => {
    useStore.setState({ showTv: false });
  }, []);
  console.log("tv is show?", showTv);
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
            <InView
              as="div"
              initialInView={true}
              threshold={0.5}
              onChange={(inView, entry) => {
                inView && useStore.setState({ index: 2 });
                inView && useStore.setState({ showTv: false });
              }}
            >
              <Intro />
            </InView>
            <InView
              as="div"
              threshold={0.5}
              rootMargin={matches ? "150px" : "0px"}
              onChange={(inView, entry) =>
                inView && useStore.setState({ index: 1 })
              }
            >
              <HowIWork />
            </InView>
            <InView
              as="div"
              threshold={0.5}
              rootMargin={matches ? "150px" : "0px"}
              onChange={(inView, entry) => {
                inView && useStore.setState({ index: 1 });
                inView
                  ? useStore.setState({ showTv: true })
                  : useStore.setState({ showTv: false });
              }}
            >
              <MyWorks />
            </InView>
            <InView
              as="div"
              threshold={0.5}
              rootMargin="55px 0px"
              onChange={(inView, entry) => {
                inView && useStore.setState({ index: 0 });
                inView
                  ? useStore.setState({ showTv: false })
                  : useStore.setState({ showTv: true });
              }}
            >
              <Contact />
            </InView>
          </Grid>
        </Grid>
        <div>test test</div>
      </Box>
    </ThemeProvider>
  );
}

export default App;
