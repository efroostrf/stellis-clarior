import { object, string, z } from "zod";
import emailSchema from "@/schemas/email.schema";
import nameSchema from "@/schemas/name.schema";

const contactFormSchema = object({
  name: nameSchema,
  email: emailSchema,
  message: string()
    .min(100, {
      message: "Сообщение должно быть не короче 100 символов",
    })
    .max(1000, {
      message: "Сообщение должно быть не длиннее 1000 символов",
    })
    .trim(),
  recaptchaToken: string().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export default contactFormSchema;
