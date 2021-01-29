import bcrypt from 'bcryptjs'

export const userHashPasswordService = async (password: string) => {
  const salt = await bcrypt.genSalt(12)
  const hashedPassword = await bcrypt.hash(password, salt)

  return hashedPassword
}

export const userComparePasswordService = async (submittedPassword: string, password: string) => {
  const matchedPassword = await bcrypt.compare(password, submittedPassword)
  return matchedPassword
}
