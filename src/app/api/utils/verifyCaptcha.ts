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

  const data = (await result.json()) as { score: number };

  return data && data.score > 0.5;
};

export default verifyCaptcha;
