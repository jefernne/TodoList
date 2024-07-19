import { secretOrPrivateKey } from "../config/config.js";
import { createAccresToken } from "../libs/jwt.js";
import singups from "../models/auth.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const posregister = async (req, res) => {
  const { User, Email, Password } = req.body;
  try {
    console.log(User, Email, Password);
    if (!User || !Email || !Password) {
      res.status(400).json({ message: "The fields are required" });
    }

    const passwordHash = await bcrypt.hash(Password, 10);
    let idUser = (await singups.countDocuments()) + 1;

    const ValidateUser = await singups.findOne({ Email: Email });
    if (ValidateUser) {
      return res
        .status(400)
        .json({ message: ["The email address already exists"] });
    }

    const newUser = new singups({
      idUser,
      User,
      Email,
      Password: passwordHash,
    });

    const guardar = await newUser.save();
    const token = await createAccresToken({ idUser: guardar.idUser });

    res.cookie("token", token);
    const Confirmed = {
      idUser,
      Email,
      User,
      createdAt: guardar.createdAt,
      updatedAt: guardar.updatedAt,
    };
    res.status(200).json({ message: Confirmed });
  } catch (error) {
    res.status(500).json({message:`There is an error on the server. The error is: ${error}`});
  }
};

export const postlogin = async (req, res) => {
  const { Email, Password } = req.body;
  console.log(Email, Password);
  
  try {
    if (!Email || !Password) {
      return res.status(400).json({ message: ["The fields are required"] });
    }
    const User = await singups.findOne({ Email: Email });
    if (!User) {
      return res.status(404).json({ message: ["Not registered"] });
    }
    const isMatch = await bcrypt.compare(Password, User.Password);
    if (!isMatch) {
      return res.status(404).json({ message: ["Incorrect password"] });
    }

    const token = await createAccresToken({ idUser: User.idUser });
    res.cookie("token", token);
    const Confirmed = {
      idUser: User.idUser,
      Email: User.Email,
      User:User.User,
      createdAt: User.createdAt,
      updatedAt: User.updatedAt,
    };
    res.status(200).json({ message: Confirmed });
  } catch (error) {
    res.status(500).json({message:`There is an error on the server. The error is: ${error}`});
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });
  res.sendStatus(200);
};

export const profile = (req, res) => {
  console.log(req.User);
  res.json({ messaje: "exit Hello Profile"});
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({ messaje: ["Unauthorized"] });
  }
  jwt.verify(token, secretOrPrivateKey, async (err, user) => {
    if (err) {
      return res.status(403).json({ messaje: ["Unauthorized"] });
    }

    const verifyUser = await singups.findOne({ idUser: user.idUser });

    if (!verifyUser) {
      return res.status(400).json({ message: ["Unauthorized"] });
    }
    const Confirmed = {
      idUser: verifyUser.idUser,
      Email: verifyUser.Email,
      User: verifyUser.User,
    };
    return res.status(200).json({ message: Confirmed });
  });
};
