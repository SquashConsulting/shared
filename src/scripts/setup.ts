import { db } from "@arangodb";

import * as COLLECTIONS from "../collections";

const edges = Object.values(COLLECTIONS.EDGES);
const documents = Object.values(COLLECTIONS.DOCUMENTS);

for (const collection of documents) {
  if (!db._collection(collection)) {
    db._createDocumentCollection(collection);
  } else if (module.context.isProduction) {
    console.debug(
      `collection ${collection} already exists. Leaving it untouched.`
    );
  }
}

for (const edge of edges) {
  if (!db._collection(edge)) {
    db._createEdgeCollection(edge);
  } else if (module.context.isProduction) {
    console.debug(
      `edge collection ${edge} already exists. Leaving it untouched`
    );
  }
}
