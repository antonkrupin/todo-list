import * as fb from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

import firebaseConfig from "./config";

export const firebase = fb.initializeApp(firebaseConfig);
//export const db = getFirestore(firebase);
/**
 * Data base ref
 */
export const database = getDatabase(firebase);


