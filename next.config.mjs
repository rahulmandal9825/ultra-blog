/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
          {
            protocol: 'https',
            hostname: "avatar.iran.liara.run"
          },
          {
            protocol:'https',
            hostname: "files.edgestore.dev"
          }
        ]
      }
};


export default nextConfig;
