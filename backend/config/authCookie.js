const isProduction =
  process.env.NODE_ENV === "production" ||
  Boolean(process.env.RENDER_EXTERNAL_URL);

export const authCookieOptions = {
  httpOnly: true,
  secure: isProduction,
  sameSite: isProduction ? "none" : "lax",
  path: "/",
};
