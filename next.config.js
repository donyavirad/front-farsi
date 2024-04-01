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
    async headers() {
        return [
          {
            // Matching all URLs
            source: "/(.*)",
            headers: [
              {
                key: "X-Content-Type-Options",
                value: "nosniff",
              },
              {
                key: "X-Frame-Options",
                value: "SAMEORIGIN",
              },
              {
                key: "X-XSS-Protection",
                value: "1; mode=block",
              },
            ],
          },
        ];
      },
}

module.exports = nextConfig
