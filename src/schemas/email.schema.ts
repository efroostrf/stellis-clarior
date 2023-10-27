import { string, z } from "zod";

const emailSchema = string({
  description: "Э-мейл",
  invalid_type_error: "Э-мейл должен быть строкой",
  required_error: "Э-мейл обязателен",
})
  .email({
    message: "Невалидный э-мейл",
  })
  .min(1, {
    message: "Э-мейл должен быть не короче 1 символа",
  })
  .max(255, {
    message: "Э-мейл должен быть не длиннее 255 символов",
  })
  .trim();

export type Email = z.infer<typeof emailSchema>;

export default emailSchema;
