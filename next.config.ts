import type { NextConfig } from "next";
import { PAGE_PRODUCTS, PAGE_PRODUCT_ALL_IN_ONE } from "@/constants/navigation.constants";
import createNextIntlPlugin from "next-intl/plugin";

const isProd = process.env.NODE_ENV === 'production';
const appPath = isProd ? process.env.NEXT_PUBLIC_BASE_PATH : '';


const nextConfig: NextConfig = {
  // output: isProd ? 'export' : undefined,
  trailingSlash: true,
  basePath: appPath,
  assetPrefix: appPath,
  images: {
    unoptimized: false, // обязательно для static export
  },
  // Для next-intl
  // i18n: {
  //   locales: ['en', 'ru', 'az'],
  //   defaultLocale: 'en',
  // },
  async redirects() {
    return [
      {
        source: PAGE_PRODUCTS,
        destination: PAGE_PRODUCT_ALL_IN_ONE,
        permanent: true,
      },
    ]
  },
};

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');
export default withNextIntl(nextConfig);