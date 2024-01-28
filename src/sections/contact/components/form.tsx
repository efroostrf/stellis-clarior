"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import dynamic from "next/dynamic";
import { FC, useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import sendTelegramMessageAction from "@/app/_actions/send-tg-message";
import verifyCaptchaAction from "@/app/_actions/verify-captcha";
import contactFormSchema, {
  ContactFormValues,
} from "@/sections/contact/schemas/form.schema";

const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"));

const ContactForm: FC = (): JSX.Element => {
  const {
    register,
    setError,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const recaptchaToken = useRef<string | null>(null);
  const [loadRecaptcha, setLoadRecaptcha] = useState(false);

  const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string;

  const onSubmit: SubmitHandler<ContactFormValues> = async (values) => {
    const isCaptchaValid = await verifyCaptchaAction(recaptchaToken.current);

    if (!isCaptchaValid) {
      return setError("recaptchaToken", {
        message: "Пожалуйста, подтвердите, что вы не робот",
      });
    }

    await sendTelegramMessageAction({
      text: `
        У тебя новое письмо с сайта от ${values.name} (${values.email}):\n
        ${values.message}
      `,
    });
  };

  const onReCAPTCHAChange = async (token: string | null) => {
    recaptchaToken.current = token;
  };

  // how to use watch to track update of recaptchaToken
  useEffect(() => {
    watch(() => {
      if (loadRecaptcha) return;

      setLoadRecaptcha(true);
    });
  }, [watch, loadRecaptcha]);

  return (
    <form
      className="grid w-full grid-cols-2 gap-2 gap-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label className="block text-sm font-medium text-brand-50">
          Ваше имя
        </label>
        <input
          data-error={!!errors.name}
          className="w-full overflow-clip rounded-md border border-brand-500 bg-brand-50 p-2 text-brand-900 focus:outline-none active:border-brand-600 data-[error=true]:border-red-300"
          type="text"
          required
          placeholder="Руна"
          {...register("name")}
        />
        {errors.name && (
          <p className="mt-1 text-xs italic text-red-300">
            {errors.name?.message}
          </p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-brand-50">Email</label>
        <input
          data-error={!!errors.email}
          className="w-full overflow-clip rounded-md border border-brand-500 bg-brand-50 p-2 text-brand-900 focus:outline-none active:border-brand-600 data-[error=true]:border-red-300"
          type="email"
          required
          placeholder="contact@stellisclarior.com"
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-1 text-xs italic text-red-300">
            {errors.email?.message}
          </p>
        )}
      </div>
      <div className="col-span-2">
        <label className="block text-sm font-medium text-brand-50">
          Сообщение
        </label>
        <textarea
          data-error={!!errors.message}
          className="w-full  rounded-md border border-brand-500 bg-brand-50 p-2 text-brand-900 focus:outline-none active:border-brand-600 data-[error=true]:border-red-300"
          placeholder="Руна"
          required
          rows={5}
          minLength={100}
          maxLength={1000}
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1 text-xs italic text-red-300">
            {errors.email?.message}
          </p>
        )}
        <p className="mt-1 text-brand-100">
          Длина сообщения от 100 до 1000 символов. Можете также оставить
          дополнительный контакт для связи (Telegram, Instagram, .etc)!
        </p>
      </div>
      <div className="col-span-2">
        {loadRecaptcha && (
          <ReCAPTCHA
            sitekey={recaptchaKey}
            onChange={onReCAPTCHAChange}
            theme="dark"
          />
        )}
        {errors.recaptchaToken && (
          <p className="mt-1 text-xs italic text-red-300">
            {errors.recaptchaToken?.message}
          </p>
        )}
      </div>
      <button
        className="col-span-2 rounded-md bg-brandDark-900 px-8 py-3 text-brandDark-100 transition-all duration-100 hover:bg-brandDark-800 active:scale-95 active:bg-brandDark-900 active:outline-none"
        type="submit"
      >
        Отправить
      </button>
    </form>
  );
};

export default ContactForm;
