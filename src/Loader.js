import { useSpring, animated } from "react-spring";
import React, { useState } from "react";
import useStore from "./store";

export default function Loader() {
  const [flip, set] = useState(false);

  // import loader reseter for animation bar
  const resetLoader = useStore((state) => state.resetLoader);
  const immediate = useStore((state) => state.immediate);

  const props = useSpring({
    to: { width: "100%" },
    from: { width: "0%" },
    reset: true,
    config: { duration: 3000 },
    immediate: immediate,
    onRest: () => set(!flip),
  });

  return <animated.div className="loader" style={props} key={resetLoader} />;
}
