import mongoose from 'mongoose'

const dbConnext = () => {
	if (mongoose.connection.readyState >= 1) return

	mongoose.connect('mongodb://0.0.0.0:27017/san-font')
}

export default dbConnext
