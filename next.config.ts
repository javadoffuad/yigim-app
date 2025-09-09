import type { NextConfig } from "next";
import { PAGE_COMPANY, PAGE_COMPANY_ABOUT, PAGE_PRODUCTS, PAGE_PRODUCT_ALL_IN_ONE } from "./app/constants/navigation.constants";

const nextConfig: NextConfig = {
  output: 'export',
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  trailingSlash: true,
  images: {
    unoptimized: true // Обязательно для static export
  },
  basePath: process.env.NODE_ENV === 'production' ? '/yigim-app' : '',
  /* config options here */
  async redirects() {
    return [
      {
        source: PAGE_COMPANY,
        destination: PAGE_COMPANY_ABOUT,
        permanent: true,
      },
      {
        source: PAGE_PRODUCTS,
        destination: PAGE_PRODUCT_ALL_IN_ONE,
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
