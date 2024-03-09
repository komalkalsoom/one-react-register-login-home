import bcrypt from 'bcrypt';

// user password converted to hash
export const hashPassword = async (password) => {
try {
    const saltRound = 10;
    const hashedPassword = await bcrypt.hash(password,saltRound)
    return hashedPassword;
} catch (error) {
    console.log(error)
}
}

// compare password at time login
export const comparePassword = async (password,hashedPassword) => {
  return bcrypt.compare(password,hashedPassword);
}