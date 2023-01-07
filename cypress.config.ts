import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,
  component: {
    includeShadowDom: true,
    supportFile: "cypress/support/index.ts",
    specPattern: "cypress/integrations/**/*spec.{ts,tsx}",
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
