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

const verifyToken = (token:string) => {
  try {
    const validationResult = verify(token, process.env.privateKey!);
    return validationResult;
  } catch (err) {
    console.log("Verify Token Error =>", err);
    return false;
  }
};

export { hashPassword, generateToken ,verifyPassword,verifyToken};
