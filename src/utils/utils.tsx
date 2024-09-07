import { compare, hash } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";

type generateTokenType = {
  email: string;
};

const hashPassword = async (password: string) => {
  const hashedpassword = await hash(password, 12);
  return hashedpassword;
};

const generateToken = async (data: generateTokenType) => {
  const token = await sign({ ...data }, process.env.privateKey!, {
    expiresIn: "24h",
  });
  return token;
};

const verifyPassword = async (password: string, hashedpassword: string) => {
  const isValid = await compare(password, hashedpassword);
  return isValid;
};

const verifyToken = (token: string) => {
  try {
    const validationResult = verify(token, process.env.privateKey!);
    return validationResult;
  } catch (err) {
    console.log("Verify Token Error =>", err);
    return false;
  }
};

const refreshToken = (data: generateTokenType) => {
  const token = sign({ ...data }, process.env.refreshTokenSecretKey!, {
    expiresIn: "15d",
  });
  return token;
};

const onError = (err: any, req: any, res: any, next: any) => {
  err.statusCode = err.statusCode || 500;
  let error = { ...err };
  error.message = err.message;
  res.status(err.statusCode).json({
    error,
    message: error.message,
    stack: error.stack,
  });
};

const validateName = (name: string) => {
  const pattern = /^[a-z0-9_-]{3,15}$/g;

  return pattern.test(name);
};
const validateEmail = (email: string) => {
    const regex = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/g;
    return regex.test(email);
};
const validatePassword = (password: string) => {
  const pattern =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g;
  return pattern.test(password);
};

export {
  hashPassword,
  generateToken,
  verifyPassword,
  verifyToken,
  onError,
  refreshToken,
  validateName,
  validateEmail,
  validatePassword,
};
