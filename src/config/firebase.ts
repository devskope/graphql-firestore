import admin from 'firebase-admin';

import * as serviceAccount from './firestore-service-account.json';

admin.initializeApp({
  // @ts-ignore: ignore serviceAccount typechecks
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
