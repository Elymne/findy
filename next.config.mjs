/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn-images.welcometothejungle.com",
                port: "",
            },
        ],
    },
}

export default nextConfig
