import * as fb from 'firebase/app';
//import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

import { getStorage, ref, getDownloadURL, uploadBytes } from 'firebase/storage';

import firebaseConfig from "./config";

export const firebase = fb.initializeApp(firebaseConfig);
//export const db = getFirestore(firebase);
/**
 * Data base ref
 */
export const database = getDatabase(firebase);

/**
 * upload file to filestorage
 * @param {File} file uploaded file
 * @param {function} setFilePath function for adding uploaded files paths
 */
export const uploadFile = (file, setFilePath) => {
	const storage = getStorage();
	const filesRef = ref(storage, 'files/' + file.name);
	
	uploadBytes(filesRef, file)
	.then((snapshot) => {
		getDownloadURL(snapshot.ref).then((downloadURL) => {
			setFilePath((prev) => {
				return [...prev, [file.name, downloadURL]];
			});
		})
	});
}


