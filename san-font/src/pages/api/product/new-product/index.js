import { createProductValidator } from '../../../../backend/validator/product.validator'
import db from '../../../../backend/models/index.js'
import {
	GLOBAL_SWITCH,
	GLOBAL_STATUS,
} from '../../../../backend/constants/common.constant'
import { HTTP_ERROR, FIELD_ERROR } from '../../../../backend/errors/error'
import checkToken from '@/backend/authentication/auth.authentication'
export default async function handle(req, res, next) {
	if (req.method === 'POST') {
		// await createProductValidator(req.body, res);
		checkToken(req, res)
		console.log('check', req.user.data.id)
		const t = await db.sequelize.transaction()
		let subProductId = 0
		const createProductForm = req.body
		try {
			if (createProductForm.productSlug) {
				const slugExist = await db.Product.findOne({
					where: {
						productSlug: createProductForm.productSlug,
					},
				})

				// Check create order detail
				if (slugExist) {
					return res.status(HTTP_ERROR.BAD_REQUEST).json({
						name: 'check_slug',
						code: FIELD_ERROR.SLUG_IS_EXISTS,
						message: 'Slug is exists',
					})
				}
			}

			// Create order detail
			const product = await db.Product.create(
				createProductForm,
				{ userId: req.user.data.id },
				{
					transaction: t,
				}
			)

			// Check create order detail
			if (!product) {
				return res.status(HTTP_ERROR.BAD_REQUEST).json({
					name: 'create_product',
					code: FIELD_ERROR.CREATE_PRODUCT_FAILED,
					message: 'Create product not success',
				})
			}

			// Create detail product
			for (const subProduct of createProductForm.productDetail) {
				await db.ProductInventory.create(
					{
						productId: product.id,
						subProductId,
						quantity: 0,
					},
					{
						transaction: t,
					}
				)
				subProductId += 1
			}

			// Create main image
			await db.ProductImage.create(
				{
					productId: product.id,
					image: createProductForm.mainImage,
					isMain: GLOBAL_SWITCH.ON,
					status: GLOBAL_STATUS.ACTIVE,
				},
				{
					transaction: t,
				}
			)

			// Create sub-image
			for (const subImage of createProductForm.subImage) {
				// Create main image
				await db.ProductImage.create(
					{
						productId: product.id,
						image: subImage.image,
						isMain: GLOBAL_SWITCH.OFF,
						status: GLOBAL_STATUS.ACTIVE,
					},
					{
						transaction: t,
					}
				)
			}

			// Commit transaction
			await t.commit()

			return res.status(200).json('success')
		} catch (e) {
			console.log('ERROR_CREATE_PRODUCT: ', e)
			if (t) await t.rollback()
			throw e
		}
	}
}
