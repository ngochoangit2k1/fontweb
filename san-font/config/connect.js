import mongoose from 'mongoose'

const Connext = () => {
	if (mongoose.connection.readyState >= 1) return

	mongoose.connect(process.env.MONGO)
}

export default Connext
