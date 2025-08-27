import { getAuthContext } from '@/lib/auth/context';
import { redirect } from '@tanstack/react-router';
import { createServerFn } from "@tanstack/react-start";

export const assertSession = createServerFn({method: 'GET', response: 'data'}).handler( async () => {
  const { user } = await getAuthContext(event);

  if (!user) {
    throw redirect({ to: '/' });
  }

  return { user };
});
