import { useTexture } from "@react-three/drei";
import React, { useState, useEffect } from "react";
import useStore from "./store";
import retailers from "./retailers";
const TextureChanger = () => {
  // change texture selection for tv screen
  const [circle2, circle3, circle4, mego1, netto1, testPattern] = useTexture([
    "kvTextures/circle2.jpg",
    "kvTextures/circle3.jpg",
    "kvTextures/circle4.jpg",
    "kvTextures/mego1.jpg",
    "kvTextures/netto1.jpg",
    "testPattern.jpg",
  ]);
  const textureArray = [circle2, circle3, circle4, mego1, netto1, testPattern];
  textureArray.forEach((texture) => {
    texture.flipY = false;
  });

  // import current KV selected from state management
  const kv = useStore((state) => state.kv);

  // import loader reseter for animation bar
  const resetLoader = useStore((state) => state.resetLoader);
  const immediate = useStore((state) => state.immediate);

  // Manage changing texture on tv screen
  const [tvTexture, setTvTexture] = useState(circle2);

  // define variable for setInterval function so it can be cleared

  useEffect(() => {
    let refreshContent;
    setTvTexture(testPattern);
    useStore.setState({ immediate: true });
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
          useStore.setState({ immediate: true });
          setTvTexture(textureArray[[retailers[kv]["number"][counter]]]);
          useStore.setState({ immediate: false });
        }, 3000);
      } else {
        // turn off animation

        // clear interval if there is no array
        clearInterval(refreshContent);
        setTvTexture(textureArray[retailers[kv]["number"]]);
      }
    }, 200);
    return () => {
      clearTimeout(timer);
      clearInterval(refreshContent);
    };
  }, [kv]);

  return <meshBasicMaterial roughness={0.3} map={tvTexture} />;
};

export default TextureChanger;
