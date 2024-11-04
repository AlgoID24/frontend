import Icons from "unplugin-icons/webpack";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.plugins.push(
      Icons({
        jsx: "react",
        compiler: "jsx",
        autoInstall: true,
      }),
    );
    return config;
  },
};
//

export default nextConfig;
