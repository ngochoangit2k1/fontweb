import Layout from '@/components/Layout'
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import store from '../../redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

let persistor = persistStore(store)

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}) {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<SessionProvider session={session}>
					<Layout>
						<ToastContainer
							position='top-right'
							autoClose={5000}
							hideProgressBar
							newestOnTop={false}
							closeOnClick
							rtl={false}
							pauseOnFocusLoss
							draggable
							pauseOnHover
							theme='dark'
						/>
						{/* Same as */}

						<Component {...pageProps} />
					</Layout>
				</SessionProvider>
			</PersistGate>
		</Provider>
	)
}
