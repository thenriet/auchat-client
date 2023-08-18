const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // devServer: "http://localhost:8080",
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/scss/main.scss";`,
      },
    },
  },
});
