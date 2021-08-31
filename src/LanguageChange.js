import React from "react";
import { Typography } from "@material-ui/core";
import useStore from "./store";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

function LanguageChange() {
  // check for materialUi breakpoints
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  // import changeLanguage function from store
  const changeLanguage = useStore((state) => state.changeLanguage);
  const isPl = useStore((state) => state.isPl);

  return (
    <Box
      display="flex"
      position="sticky"
      top="0vh"
      justifyContent="center"
      alignItems="center"
      className="solidBackground"
      px={matches ? 4 : 1}
      zIndex="tooltip"
    >
      {/* <Typography variant="body2" onClick={changeLanguage}>
        PL/EN
      </Typography> */}
      <Box flexGrow={1}>
        <Typography variant="body2">MARCINJARKA@GMAIL.COM</Typography>
      </Box>
      <Box>
        <Button size="small" onClick={changeLanguage} color="primary">
          {isPl ? "English" : "Polski"}
        </Button>
      </Box>
    </Box>
  );
}

export default LanguageChange;
