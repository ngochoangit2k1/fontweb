import React, { useEffect, useState } from 'react'
import { useQuill } from 'react-quilljs'
import 'quill/dist/quill.snow.css'

const TextEditor = () => {
	const { quill, quillRef } = useQuill()
	const [value, setValue] = useState()

	useEffect(() => {
		if (quill) {
			quill.on('text-change', () => {
				console.log(quillRef.current.firstChild.innerHTML)
				setValue(quillRef.current.firstChild.innerHTML)
			})
		}
	}, [quill])

	console.log(value, 'this is quill editor')
	return (
		<div className='mt-1'>
			<div className='w-[100%] h-60'>
				<div ref={quillRef} />
			</div>
		</div>
	)
}
export default TextEditor
