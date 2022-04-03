import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import legacyPlugin from "@vitejs/plugin-legacy";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    viteCompression(),
    reactRefresh(),
    legacyPlugin({
      targets: [
        "Android > 39",
        "Chrome >= 60",
        "Safari >= 10.1",
        "iOS >= 10.3",
        "Firefox >= 54",
        "Edge >= 15",
      ],
    }),
  ],
  build: {
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["react", "react-dom", "react-router-dom", "antd", "dayjs"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: "react",
          "react-dom": "react-dom",
          "react-router-dom": "react-router-dom",
          antd: "antd",
          dayjs: "dayjs",
        },
      },
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  esbuild: {},
  optimizeDeps: {},
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {},
        javascriptEnabled: true,
      },
    },
  },
});
