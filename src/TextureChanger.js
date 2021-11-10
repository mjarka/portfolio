import { useTexture } from "@react-three/drei";
import React, { useState, useEffect } from "react";
import useStore from "./store";
import retailers from "./retailers";
const TextureChanger = () => {
  // change texture selection for tv screen
  const [
    circle2,
    circle3,
    circle4,
    mego1,
    netto1,
    rimi1,
    rimi2,
    rimi3,
    spar1,
    spar2,
    spar3,
    wiko1,
    wiko2,
    wiko3,
    poster1,
    poster2,
    poster3,
    poster4,
    poster5,
    poster6,
    poster7,
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    testPattern,
  ] = useTexture([
    "kvTextures/circle2.jpg",
    "kvTextures/circle3.jpg",
    "kvTextures/circle4.jpg",
    "kvTextures/mego1.jpg",
    "kvTextures/netto1.jpg",
    "kvTextures/rimi1.jpg",
    "kvTextures/rimi2.jpg",
    "kvTextures/rimi3.jpg",
    "kvTextures/spar1.jpg",
    "kvTextures/spar2.jpg",
    "kvTextures/spar3.jpg",
    "kvTextures/wiko1.jpg",
    "kvTextures/wiko2.jpg",
    "kvTextures/wiko3.jpg",
    "kvTextures/poster1.jpg",
    "kvTextures/poster2.jpg",
    "kvTextures/poster3.jpg",
    "kvTextures/poster4.jpg",
    "kvTextures/poster5.jpg",
    "kvTextures/poster6.jpg",
    "kvTextures/poster7.jpg",
    "kvTextures/logo1.jpg",
    "kvTextures/logo2.jpg",
    "kvTextures/logo3.jpg",
    "kvTextures/logo4.jpg",
    "kvTextures/logo5.jpg",
    "kvTextures/logo6.jpg",
    "testPattern.jpg",
  ]);
  const textureArray = [
    circle2,
    circle3,
    circle4,
    mego1,
    netto1,
    rimi1,
    rimi2,
    rimi3,
    spar1,
    spar2,
    spar3,
    wiko1,
    wiko2,
    wiko3,
    poster1,
    poster2,
    poster3,
    poster4,
    poster5,
    poster6,
    poster7,
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    testPattern,
  ];
  textureArray.forEach((texture) => {
    texture.flipY = false;
  });

  // import TV bool to start animation - texture change
  const showTv = useStore((state) => state.showTv);

  // import current KV selected from state management
  const kv = useStore((state) => state.kv);

  // import loader reseter for animation bar
  const resetLoader = useStore((state) => state.resetLoader);
  const immediate = useStore((state) => state.immediate);

  // Manage changing texture on tv screen
  const [tvTexture, setTvTexture] = useState(circle2);

  useEffect(() => {
    // define variable for setInterval function so it can be cleared
    let refreshContent;
    setTvTexture(testPattern);

    // start animation when TV appears
    showTv
      ? useStore.setState({ immediate: true })
      : useStore.setState({ immediate: false });

    const timer = setTimeout(() => {
      // set texture based on RETAILERS object. Number corresponds to index in array
      // if object with KV has array then loop through array - otherwise just simple one texture
      if (Array.isArray(retailers[kv]["number"])) {
        // reset counter at KV change
        let counter = 0;

        // turn on animation
        useStore.setState({ immediate: false });

        // set initial texture to first index of array
        setTvTexture(textureArray[[retailers[kv]["number"][counter]]]);

        // set interval and change KV every 2 seconds if there are more than one design for client
        refreshContent = setInterval(() => {
          // if counter is smaller than length of the array then increment it by one otherwise reset it
          counter < retailers[kv]["number"].length - 1
            ? (counter = counter + 1)
            : (counter = 0);

          // set the texture to the index of array
          setTvTexture(textureArray[[retailers[kv]["number"][counter]]]);
          useStore.setState({ immediate: false });
        }, 3000);
      } else {
        // clear interval if there is no array
        clearInterval(refreshContent);
        setTvTexture(textureArray[retailers[kv]["number"]]);
      }
    }, 200);
    return () => {
      clearTimeout(timer);
      clearInterval(refreshContent);
    };
  }, [kv, showTv]);

  return <meshBasicMaterial roughness={1} map={tvTexture} />;
};

export default TextureChanger;
