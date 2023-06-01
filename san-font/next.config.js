/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['images.unsplash.com', 'fonttiengviet.com', 'imgGlobal.FTV1'],
	},
	env: {
		DB_URI: 'mongodb://localhost:27017/san-font',
		NEXTAUTH_SECRET: 'codingwithabbas',
	},
}

module.exports = nextConfig
