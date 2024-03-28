/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "bpkjptinstydddugxqcs.supabase.co",
                port: ""
            }
        ]
    },
    experimental: {
        appDir: true,
    }
}

module.exports = nextConfig
