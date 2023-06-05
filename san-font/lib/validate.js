export default function login_validate(values) {
	const errors = {}

	if (!values.email) {
		errors.email = 'Required'
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address'
	}

	if (!values.password) {
		errors.password = 'Required'
	} else if (values.password.length < 8) {
		errors.password = 'Must be more than 8 characters'
	}

	return errors
}

export function registerValidate(values) {
	const errors = {}

	if (!values.name) {
		errors.name = 'Required'
	} else if (values.name.length < 5) {
		errors.name = 'Must be more than 5 character'
	}

	if (!values.email) {
		errors.email = 'Required'
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address'
	}

	if (!values.password) {
		errors.password = 'Required'
	} else if (values.password.length < 8) {
		errors.password = 'Must be more than 8 characters'
	}

	if (!values.confirmPassword) {
		errors.confirmPassword = 'Required'
	} else if (values.password !== values.confirmPassword) {
		errors.confirmPassword = 'password not match'
	}

	return errors
}
