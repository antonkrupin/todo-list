import * as fb from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import firebaseConfig from "./config";

const firebase = fb.initializeApp(firebaseConfig);
const db = getFirestore(firebase);

export default db;