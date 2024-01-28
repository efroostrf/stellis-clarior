"use server";

import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

import { AUTH_COOKIE_NAME } from ".";

export const isAdminAction = async () => {
  const cookie = cookies().get(AUTH_COOKIE_NAME);

  if (!cookie || !cookie.value) {
    return false;
  }

  const isValid = jwt.verify(cookie.value, process.env.JWT_SECRET!);

  if (!isValid) {
    return false;
  }

  return true;
};
