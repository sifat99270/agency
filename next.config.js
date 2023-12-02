/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['agency.teamrabbil.com']
    },
    async headers(){
        return[
            {
                source:"/:path*",
                headers: [
                    {
                        key: 'X-Powered-By',
                        value: 'SMN',
                    }
                ]
            }
        ]
    }
}

module.exports = nextConfig
