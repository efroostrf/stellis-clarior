import { z } from "zod";

export const signInSchema = z.object({
  login: z.string().min(3),
  password: z.string().min(6),
});

export type SignInValues = z.infer<typeof signInSchema>;

export const AUTH_COOKIE_NAME = "sclr.auth";
