import Layout from '@/components/Layout'
import '@/styles/globals.css'
import Login from './login'
import Register from './register'

export default function App({ Component, pageProps }) {
	return (
		<>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}
