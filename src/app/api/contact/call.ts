import API_ROUTES from "@/app/api/routes";
import contactFormSchema, {
  ContactFormValues,
} from "@/sections/contact/schemas/form.schema";

/**
 * Sends a contact form to the server.
 * @param values - The values of the contact form.
 * @returns A Promise that resolves to the server response.
 */
const callSendContactForm = async (values: ContactFormValues) => {
  const data = contactFormSchema.parse(values);

  const result = await fetch(API_ROUTES.contact, {
    body: JSON.stringify(data),
    method: "POST",
    cache: "no-cache",
  });

  return result;
};

export default callSendContactForm;
