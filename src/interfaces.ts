import { User } from "./models";

interface RAW {
  cookies: {
    sid?: string;
  };
}

interface SessionStorage extends Foxx.SessionStorage {
  prune: () => void;
  save: (session?: Foxx.Session) => void;
  clear: (session: Foxx.Session) => void;
}

export interface Request extends Foxx.Request {
  _raw: RAW;
  currentUser?: User;
  sessionStorage?: SessionStorage;
}
