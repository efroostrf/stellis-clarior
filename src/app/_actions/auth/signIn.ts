"use server";

import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

import { AUTH_COOKIE_NAME, signInSchema, SignInValues } from ".";

export const signInAction = async (values: SignInValues): Promise<boolean> => {
  const { login, password } = await signInSchema.parseAsync(values);

  if (
    login !== process.env.ADMIN_LOGIN ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return false;
  }

  const payload = {
    login,
    authedAt: new Date(),
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: "31d",
  });

  cookies().set({
    name: AUTH_COOKIE_NAME,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 31 * 24 * 60 * 60,
    sameSite: "strict",
  });

  return true;
};
