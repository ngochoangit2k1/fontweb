import Layout from '@/components/Layout'
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export default function App({
	Component,
	pageProps: { session, ...pageProps },
}) {
	return (
		<SessionProvider session={session}>
			<Layout>
				<ToastContainer
					position='top-right'
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme='light'
				/>
				{/* Same as */}
				<ToastContainer />
				<Component {...pageProps} />
			</Layout>
		</SessionProvider>
	)
}
