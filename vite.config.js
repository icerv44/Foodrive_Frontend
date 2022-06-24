import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import ViteFonts from "vite-plugin-fonts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // ViteFonts({
    //   google: {
    //     families: [
    //       {
    //         name: "IBM Plex Sans Thai",
    //         styles: "wght@400,500,600,700",
    //         defer: true,
    //       },
    //     ],
    //   },
    // }),
  ],
});
