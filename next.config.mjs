/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      GOOGLE_APPLICATION_CREDENTIALS: './util/jdml-448601-590ad229d2aa.json',
      OPENAI_API_KEY: process.env.OPENAI_API_KEY, // Agregamos esta variable
    },
  };
  
  export default nextConfig;