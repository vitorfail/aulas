// Importar o Firebase Admin SDK
import admin from 'firebase-admin';

// Inicializar o Firebase Admin SDK com a chave privada

admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(process.env.NEXT_KEY))
});

// Obter referência ao Firestore
export default admin.firestore();
