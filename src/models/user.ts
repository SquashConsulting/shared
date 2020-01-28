export interface User extends ArangoDB.Document {
  _id: string;
  _key: string;
  _rev: string;
  username?: string;
  authData?: {
    salt: string;
    hash: string;
    method: string;
  };
}
