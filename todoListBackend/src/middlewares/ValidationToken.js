import jwt from "jsonwebtoken";
import { secretOrPrivateKey } from "../config/config.js";

export const authRequire = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({ messaje: "No token authorization danied" });
  }
  jwt.verify(token, secretOrPrivateKey, (err, user) => {
    if (err) {
      return res.status(403).json({ messaje: "It's not authorized" });
    }
    req.User = user;
    next();
  });
};
