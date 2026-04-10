import type { NextConfig } from "next";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  outputFileTracingRoot: process.cwd(),
  // Next 16 defaults to Turbopack. vanilla-extract plugin adds webpack config,
  // so set turbopack explicitly to avoid startup failure.
  turbopack: {},
};

const withVanillaExtract = createVanillaExtractPlugin();

export default withVanillaExtract(nextConfig);
