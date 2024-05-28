/* eslint-disable no-useless-catch */

import { initializeApp } from 'firebase/app';
import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
} from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDrsdL652g2Hq2Rn_-o7MsNe0GU3PXFvtc',
	authDomain: 'guestbook-3703d.firebaseapp.com',
	projectId: 'guestbook-3703d',
	storageBucket: 'guestbook-3703d.appspot.com',
	messagingSenderId: '746447581984',
	appId: '1:746447581984:web:fd7925c99d32038e0c9d45',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerWithEmailAndPassword = async (email, password) => {
	try {
		const response = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		const user = response.user;

		return user;
	} catch (error) {
		throw error;
	}
};

const loginWithEmailAndPassword = async (email, password) => {
	try {
		const response = await signInWithEmailAndPassword(auth, email, password);
		return response;
	} catch (error) {
		throw error;
	}
};

export { auth, loginWithEmailAndPassword, registerWithEmailAndPassword };
