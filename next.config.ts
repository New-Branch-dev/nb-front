import type { NextConfig } from "next";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

import {
  API_V1_ENDPOINT,
  MY_LEARNING_API_ENDPOINT,
} from "./src/shared/config/api-endpoint";

const backendUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  // Next 16 defaults to Turbopack. vanilla-extract plugin adds webpack config,
  // so set turbopack explicitly to avoid startup failure.
  turbopack: {},
  async rewrites() {
    return [
      {
        source: `${API_V1_ENDPOINT}/:path*`,
        destination: `${backendUrl}${API_V1_ENDPOINT}/:path*`,
      },
      {
        source: MY_LEARNING_API_ENDPOINT,
        destination: `${backendUrl}${MY_LEARNING_API_ENDPOINT}`,
      },
      {
        source: `${MY_LEARNING_API_ENDPOINT}/:path*`,
        destination: `${backendUrl}${MY_LEARNING_API_ENDPOINT}/:path*`,
      },
    ];
  },
};

const withVanillaExtract = createVanillaExtractPlugin();

export default withVanillaExtract(nextConfig);
