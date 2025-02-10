export async function middlewareAuth(req) {
  const accessToken = req.cookies.get("accessToken");
  const refreshToken = req.cookies.get("refreshToken");
  const rest = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/profile`, {
    method: "GET",
    credentials: "include",
    headers: {
      Cookies: `${accessToken?.name} = ${accessToken?.value};  ${refreshToken?.name} = ${refreshToken?.value};`,
    },
  });
  const { data } = await rest.json();
  const { user } = data || {};
  return user;
}
