import { db } from "@arangodb";

import { Request } from "../interfaces";
import { User, Session } from "../models";

const {
  collections: {
    auth: {
      documents: { sessions, users }
    }
  }
} = module.context.configuration;

export function clientSession(
  req: Request,
  res: Foxx.Response,
  next: Foxx.NextFunction
) {
  const sid: string = req._raw.cookies.sid;

  if (!sid) res.throw("unauthorized");

  const session: Session = db._collection(sessions).firstExample({ _key: sid });

  if (session) {
    const sessionUser: User = db
      ._collection(users)
      .firstExample({ _key: session.uid });

    req.currentUser = sessionUser;
  } else {
    res.throw("unauthorized");
  }

  next();
}
