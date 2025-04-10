const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

if (!admin._apps || !admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} else {
  console.log('Firebase admin already initialized');
}

const db = admin.firestore();


