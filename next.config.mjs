/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['es', 'it', 'fr', 'de', 'ie', 'ae', 'uk', 'nl'],
        defaultLocale: 'es',
        localeDetection: false,
    },
    trailingSlash: true,
}

export default nextConfig
