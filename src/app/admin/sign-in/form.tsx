"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";

import { signInSchema, SignInValues } from "@/app/_actions/auth";
import { signInAction } from "@/app/_actions/auth/signIn";

export const SignInForm: FC = () => {
  const {
    register,
    formState: { errors, isValid },
    setError,
    handleSubmit,
  } = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (values: SignInValues) => {
    try {
      const result = await signInAction(values);

      if (!result) {
        return setError("root", {
          message: "Неверный логин или пароль",
        });
      }

      window.location.href = "/admin";
    } catch (err) {
      console.error(err);
      setError("root", {
        message: "Что-то пошло не так",
      });
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="rounded-lg border border-brand-500 bg-brand-700 px-4 py-2 text-brand-100"
        type="text"
        placeholder="Логин"
        required
        {...register("login")}
      />
      <input
        className="rounded-lg border border-brand-500 bg-brand-700 px-4 py-2 text-brand-100"
        type="password"
        placeholder="Пароль"
        required
        {...register("password")}
      />
      {errors.root && (
        <p className="my-2 text-red-300">{errors.root.message}</p>
      )}
      <button
        className="rounded-lg border border-brand-500 bg-brand-700 px-4 py-2 text-brand-100 disabled:cursor-not-allowed disabled:opacity-50"
        type="submit"
        disabled={!isValid}
      >
        Войти
      </button>
    </form>
  );
};
