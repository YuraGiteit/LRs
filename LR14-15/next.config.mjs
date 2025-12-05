const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ВАШ-хост.supabase.co",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },
};

export default nextConfig;
