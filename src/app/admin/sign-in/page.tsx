import { Metadata } from "next";
import { redirect } from "next/navigation";
import { FC } from "react";
import { Toaster } from "react-hot-toast";

import { isAdminAction } from "@/app/_actions/auth/isAdmin";

import { SignInForm } from "./form";

export const metadata: Metadata = {
  title: "Вход - Ярче звезд",
  robots: "noindex",
};

const AdminSignInPage: FC = async () => {
  const isAdmin = await isAdminAction();

  if (isAdmin) {
    return redirect("/admin");
  }

  return (
    <>
      <section className="relative left-0 top-0 flex min-h-[80vh] w-full items-center justify-center bg-brand-900 pt-header">
        <div className="flex min-w-[300px] flex-col gap-3 bg-brand-800 p-4">
          <h1 className="font-shantell text-3xl font-extrabold text-brand-100">
            Вход
          </h1>
          <SignInForm />
        </div>
      </section>
      <Toaster />
    </>
  );
};

export default AdminSignInPage;
