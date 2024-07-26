import bcrypt from "bcrypt"
import prisma from "../lib/prisma.js"

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // HASH THE PASSWORD

    const hashedPassword = await bcrypt.hash(password, 10);

    console.log(hashedPassword);

    // CHECKING EXISTING USER
    // const existingUser = await prisma.user.findUnique({email})
    // if(existingUser) {
    //   // return res.status(500).json({error:`User with email address ${email} already exist!`})
    //   console.log(`User with email address ${email} already exist!`);
    // }

    // CREATE A NEW USER AND SAVE TO DB
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    // console.log(newUser);

    res.status(201).json({ message: "User created successfully",newUser });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to create user!" });
  }
};