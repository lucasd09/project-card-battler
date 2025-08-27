import { getCookie } from 'vinxi/http';
import { userService } from '@/services/user';
import { validateSessionToken } from './session';

export async function getAuthContext(event: any) {
  const token = getCookie(event.request.headers, 'session');
  
  let user = null;

  if (token) {
    const session = await validateSessionToken(token);
    if (session) {
      user = await userService.getById(session.userId);
    }
  }

  return { user };
}
