import { string, z } from "zod";

const nameSchema = string({
  description: "Имя",
  invalid_type_error: "Имя должно быть строкой",
  required_error: "Имя обязательно",
})
  .regex(/^[a-zA-Zа-яА-Я]+$/, {
    message: "Имя должно содержать только буквы",
  })
  .min(3, {
    message: "Имя должно быть не короче 3 символов",
  })
  .max(14, {
    message: "Имя должно быть не длиннее 14 символов",
  })
  .trim();

export type Name = z.infer<typeof nameSchema>;

export default nameSchema;
