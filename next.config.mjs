/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Habilita el modo estricto de React
  env: {
    GOOGLE_APPLICATION_CREDENTIALS: './util/jdml-448601-590ad229d2aa.json',
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
};

export default nextConfig;
