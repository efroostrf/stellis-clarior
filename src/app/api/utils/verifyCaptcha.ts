const verifyCaptcha = async (token: string) => {
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

export default verifyCaptcha;
