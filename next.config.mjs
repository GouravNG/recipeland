/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
    images: {
        domains: ['skysonczwzlppjhpgude.supabase.co'], // Add the domains here
    },
};

export default nextConfig;
