import {defineConfig} from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import vitePluginImp from "vite-plugin-imp";
import {theme} from "./config/theme.config";
import path from "path";
// import fs from "fs";
//@ts-ignore
// * No declaration file for less-vars-to-js
// import lessToJs from "less-vars-to-js";

// const themeVariables = lessToJs(
//   fs.readFileSync(path.resolve(__dirname, "./config/variables.less"), "utf8")
// );
export default defineConfig({
  define: {
    "process.env": process.env,
  },
  plugins: [
    reactRefresh(),

    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: theme,
      },
    },
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./"),
      "@": path.resolve(__dirname, "src"),
      "@Components": path.resolve(__dirname, "src/components"),
      "@Pages": path.resolve(__dirname, "src/pages"),
      "@Assets": path.resolve(__dirname, "src/assets"),
      "@Redux": path.resolve(__dirname, "src/redux"),
      "@Utils": path.resolve(__dirname, "src/utils"),
      "@Styles": path.resolve(__dirname, "src/styles"),
    },
  },
});
