import ProductName from '@/components/Products/ProductName'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FontAmThuc = ({ NameFont }) => {
	return (
		<div className='mt-32'>
			<h2
				className='font-bold
			 text-2xl ml-[8%] '
			>
				{NameFont.slice(0, 1).map(e => e.name)}( {NameFont.length} font){' '}
			</h2>

			<div className='w-[85%]	 mx-auto mt-8 grid grid-cols-4 gap-6  max-2xl:w-[95%] max-lg:grid-cols-2 max-sm:grid-cols-1'>
				<ProductName NameFont={NameFont} />
			</div>
		</div>
	)
}

export default FontAmThuc

export async function getStaticPaths() {
	const response = await fetch(`http://localhost:4000/HomeData`)
	const data = await response.json()
	const allPaths = data.map(ev => {
		return {
			params: {
				fontSmall: ev.nameFont,
			},
		}
	})
	return {
		paths: allPaths,
		fallback: false,
	}
}
export async function getStaticProps(context) {
	const nameFont = context.params.fontSmall
	const response = await fetch(
		`http://localhost:4000/HomeData?nameFont=${nameFont}`
	)
	const data = await response.json()

	return {
		props: {
			NameFont: data,
		},
	}
}
