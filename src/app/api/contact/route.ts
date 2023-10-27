import verifyCaptcha from "@/app/api/utils/verifyCaptcha";
import createClient from "@botocrat/telegram";

/**
 * Sends a message to a Telegram chat with the data received from a contact form.
 * @param req - The request object containing the data from the contact form.
 * @returns A response object with a JSON stringified message "OK".
 */
export const POST = async (req: Request) => {
  const data = await req.json();
  const isCaptchaValid = await verifyCaptcha(data.recaptchaToken);

  if (!isCaptchaValid) {
    return new Response(JSON.stringify({ message: "INVALID_CAPTCHA" }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 400,
    });
  }

  const client = createClient({
    token: process.env.TELEGRAM_BOT_API_KEY as string,
  });

  client.sendMessage({
    chat_id: process.env.TELEGRAM_CHAT_ID as string,
    text: `
      У тебя новое письмо с сайта от ${data.name} (${data.email}):\n
      ${data.message}
    `,
  });

  return new Response(JSON.stringify({ message: "OK" }), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
