import mongoose from 'mongoose'

const connectMongo = () => {
	if (mongoose.connection.readyState >= 1) return

	mongoose.connect(process.env.DB_URI)
}

export default connectMongo
