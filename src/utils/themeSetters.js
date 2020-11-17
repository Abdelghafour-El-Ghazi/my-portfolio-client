const properties = [
  "--mainColor",
  "--secondaryColor",
  "--borderColor",
  "--mainText",
  "--secondaryText",
  "--themeDotBorder",
  "--previewBg",
  "--previewShadow",
  "--buttonColor",
];

export const setPurple = () => {
  const colors = [
    "#46344E",
    "#382a3f",
    "#1d1520",
    "#fff",
    "#eeeeee",
    "#FFF",
    "rgb(29, 21, 32, 0.8)",
    "#2b202f",
    "#8534a3",
  ];
  for (let i in colors) {
    document.documentElement.style.setProperty(properties[i], colors[i]);
  }
};

export const setLight = () => {
  const colors = [
    "#eaeaea",
    "#fff",
    "#c1c1c1",
    "black",
    "#4b5156",
    "#24292e",
    "rgb(251, 249, 243, 0.8)",
    "#f0ead6",
    "black",
  ];
  for (let i in colors) {
    document.documentElement.style.setProperty(properties[i], colors[i]);
  }
};

export const setGreen = () => {
  const colors = [
    "#606B56",
    "#515a48",
    "#161914",
    "#fff",
    "#eeeeee",
    "#FFF",
    "rgb(81, 90, 72, 0.8)",
    ":#2a2f25",
    "#669966",
  ];
  for (let i in colors) {
    document.documentElement.style.setProperty(properties[i], colors[i]);
  }
};
export const setBlue = () => {
  const colors = [
    "#15202B",
    "#192734",
    "#164D56",
    "#fff",
    "#eeeeee",
    "#FFF",
    "rgb(25, 39, 52, 0.8)",
    "#111921",
    "#17a2b8",
  ];
  for (let i in colors) {
    document.documentElement.style.setProperty(properties[i], colors[i]);
  }
};
