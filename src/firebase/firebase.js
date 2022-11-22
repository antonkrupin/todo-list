import * as fb from 'firebase/app';
import { getDatabase } from 'firebase/database';
import {
	getStorage,
	ref,
	getDownloadURL,
	uploadBytes
} from 'firebase/storage';

import firebaseConfig from "./config";

/**
 * initialize data base
 */
export const firebase = fb.initializeApp(firebaseConfig);

/**
 * Data base ref
 */
export const database = getDatabase(firebase);

/**
 * upload file to filestorage
 * @param {File} file uploaded file
 * @param {function} setFilePath function for adding uploaded files paths
 * @param {function} startLoading function for change loading status to start
 * @param {function} endLoading function for change loading status to end
 */

export const uploadFile = (file, setFilePath, startLoading, endLoading) => {
	const storage = getStorage();
	const filesRef = ref(storage, 'files/' + file.name);
	startLoading();
	uploadBytes(filesRef, file)
	.then((snapshot) => {
		getDownloadURL(snapshot.ref).then((downloadURL) => {
			setFilePath((prev) => {
				return [...prev, [file.name, downloadURL]];
			});
			endLoading();
		});
	});
}


