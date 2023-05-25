import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Messenger from './Messenger'

const Layout = ({ children }) => {
	return (
		<div>
			<Header />
			<Messenger />
			{children}

			<Footer />
		</div>
	)
}

export default Layout
