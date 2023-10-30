"use server";

/**
 * Verify the Google reCAPTCHA token.
 * @param token The reCAPTCHA token to verify.
 * @returns A Promise that resolves to a boolean indicating whether the token is valid.
 */
const verifyCaptchaAction = async (token?: string | null): Promise<boolean> => {
  if (!token) return false;

  const params = new URLSearchParams({
    secret: process.env.RECAPTCHA_SECRET_KEY as string,
    response: token,
  });

  const result = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?${params.toString()}`,
    {
      method: "POST",
      cache: "no-cache",
    }
  );

  const data = (await result.json()) as { success: boolean };

  return data && data.success;
};

export default verifyCaptchaAction;
