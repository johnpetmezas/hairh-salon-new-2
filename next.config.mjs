/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Αυτό λέει στο Vercel: "Μη σταματάς το build για λάθη στο ESLint"
        ignoreDuringBuilds: true,
    },
    typescript: {
        // Αυτό λέει στο Vercel: "Μη σταματάς αν βρεις λάθη στην TypeScript"
        ignoreBuildErrors: true,
    },
};

export default nextConfig;