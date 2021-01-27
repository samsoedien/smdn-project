import { body } from 'express-validator'

// const userValidation = [
// body('username', 'Username is required').not().isEmpty(),
// body('email', 'Email is required').not().isEmpty().isEmail().withMessage('Please enter a valid email'),
// body('password', 'Please enter password with 6 or more characters').isLength(
//   { min: 6 },
//   check('confirmPassword').custom((value, { req }) => {
//     if (value !== req.body.password) throw new Error('Password do not match')
//     return true
//   }),
// ),
// ]

const userValidation = body('username', 'UserName is required').not().isEmpty()

export default userValidation
