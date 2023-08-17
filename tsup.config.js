import { defineConfig } from "tsup";

const isProduction = process.env.NODE_ENV === "production";
export default defineConfig(({ watch = false }) => ({
  entryPoints: ["src/Snowflake.ts"],
  format: ["cjs", "esm", "iife"],
  dts: true,
  minify: isProduction,
  sourcemap: isProduction,
  watch,
}));
