import { sign, verify } from "jsonwebtoken";

//生成token

export const generateToken = (user) => {
  try {
    return sign({ user }, process.env.TOKEN_KEY);
  } catch (error) {
    console.log("error:", error);
    return null;
  }
};

export const getAuthSession = (receivedToken) => {
  return new Promise((resolve, reject) => {
    verify(receivedToken, process.env.TOKEN_KEY, (err, decoded) => {
      if (err) {
        console.error("JWT verification failed:", err);
        resolve(null);
      } else {
        // console.log("JWT verified. Decoded payload:", decoded);
        resolve(decoded);
      }
    });
  });
};
