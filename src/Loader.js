import { useSpring, animated } from "react-spring";
import React, { useState } from "react";
import useStore from "./store";

export default function Loader() {
  // import loader reseter for animation bar

  const immediate = useStore((state) => state.immediate);

  const props = useSpring({
    to: { width: "100%" },
    from: { width: "0%" },
    loop: true,
    reverse: immediate,
    immediate: immediate,
    config: { duration: 3000 },
  });

  return <animated.div className="loader" style={props} key={124124124} />;
}
