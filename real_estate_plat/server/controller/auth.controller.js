import bcrypt from "bcrypt"
import prisma from "../lib/prisma.js"

export const register = async (req,res) => {
  const {username,email,password} = req.body

  // HASH THE PASSWORD
  const hashedPassword = await bcrypt.hash(password,10)

  // CREATE NEW USER AND SAVE TO DB
  const newuser = await prisma.user.create({
    data:{
      username,
      email,
      hashedPassword
    }
  })
}