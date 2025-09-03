import { auth } from "@/lib/auth";
import { createServerFn } from "@tanstack/react-start";
import { getWebRequest } from "@tanstack/react-start/server";

export const requireAuth = createServerFn({
  method: "GET",
  response: "data",
}).handler(async () => {
  const { headers } = getWebRequest();

  const data = await auth.api.getSession({ headers });

  return data;
});

