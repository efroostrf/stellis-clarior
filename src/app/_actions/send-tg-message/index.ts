"use server";
import createClient from "@botocrat/telegram";

export type SendTelegramMessageOptions = {
  chatId?: string;
  text: string;
};

const BOT_API_TOKEN = process.env.TELEGRAM_BOT_API_KEY as string;
const BOT_CHAT_ID = process.env.TELEGRAM_CHAT_ID as string;

/**
 * Sends a message to a Telegram chat using the Telegram Bot API.
 * @param options - The options for sending the message.
 * @param options.chatId - The ID of the chat to send the message to. Defaults to the bot's chat ID.
 * @param options.text - The text of the message to send.
 * @returns A Promise that resolves with the result of the API call.
 */
const sendTelegramMessageAction = async (
  options: SendTelegramMessageOptions
) => {
  const { chatId = BOT_CHAT_ID, text } = options || {};

  const client = createClient({
    token: BOT_API_TOKEN,
  });

  return client.sendMessage({
    chat_id: chatId,
    text,
  });
};

export default sendTelegramMessageAction;
