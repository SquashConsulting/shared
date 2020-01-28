export interface Session extends ArangoDB.Document {
  data?: any;
  uid?: string;
  created?: string;
  expires?: string;
}
