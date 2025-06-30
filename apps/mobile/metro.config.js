const path = require("path");

module.exports = {
  resolver: {
    extraNodeModules: {
      "@shared": path.resolve(__dirname, "../../packages/shared/src"),
    },
  },
  watchFolders: [path.resolve(__dirname, "../../packages/shared/src")],
};
