import { Session, User } from "better-auth";

export type HeaderProps = {
  data: { session: Session; user: User };
};
