const welcome = require("cli-welcome");
const pkg = require("../package.json");
const unhandled = require("cli-handle-unhandled");

module.exports = () => {
  unhandled();
  welcome({
    title: "IronGenerator",
    tagLine: "by Ironhack",
    description: pkg.description,
    bgColor: "#2DC5FA",
    color: "#000000",
    version: pkg.version,
    clear: true,
    bold: true,
  });
};
