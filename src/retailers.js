// number is responsible for corresponding index in textures for tv screen

import svg from "./svgIcons/svg";
const retailers = {
  circlek: {
    icon: svg.circlek,
    number: [0, 1, 2],
    horizontal: true,
    viewbox: "0 0 48.5 49.2",
  },

  biedronka: {
    icon: svg.biedronka,
    number: 2,
    horizontal: true,
    viewbox: "0 0 37.7 53.1",
  },
  // kaufland: {
  //   icon: svg.kaufland,
  //   number: 3,
  //   horizontal: false,
  //   viewbox: "0 0 43.8 48.1",
  // },
  // maxima: {
  //   icon: "icons/maxima.svg",
  //   number: [1, 2, 3],
  //   horizontal: true,
  // },
  rimi: {
    icon: svg.rimi,
    number: [5, 6],
    horizontal: false,
    viewbox: "0 0 39.5 48.1",
  },
  spar: {
    icon: svg.spar,
    number: [8, 9, 10],
    horizontal: false,
    viewbox: "0 0 51.2 48.1",
  },
  wiko: {
    icon: svg.wiko,
    number: [11, 12, 13],
    horizontal: true,
    viewbox: "0 0 67.6 50.8",
  },
  netto: {
    icon: svg.netto,
    number: 4,
    horizontal: true,
    viewbox: "0 0 45.3 45.6",
  },
  logo: {
    icon: svg.logo,
    number: [21, 22, 23, 24, 25, 26],
    horizontal: true,
    viewbox: "0 0 11.8 17.6",
  },
  posters: {
    icon: svg.posters,
    number: [14, 15, 16, 17, 18, 19, 20],
    horizontal: false,
    viewbox: "0 0 64.7 60.6",
  },
};

export default retailers;
