import { initializeApp } from "firebase/app";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	getAuth,
	signOut
} from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { AuthContext } from "../context/AuthContext";

const firebaseConfig = {
	apiKey: "AIzaSyBvKJKOqBJRwUfFokL5De1qBqbAcDqy-5w",
	authDomain: "time-ca203.firebaseapp.com",
	projectId: "time-ca203",
	storageBucket: "time-ca203.appspot.com",
	messagingSenderId: "1011064395317",
	appId: "1:1011064395317:web:e66045995a226bc08b037c",
	measurementId: "G-NYKGP0J2QY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export default app;

export async function signUp(email, password) {
	await createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			AuthContext.currentUser = userCredential.user;
			return userCredential.user;
		})
		.catch((error) => {
			console.log(error.code, error.message);
		});
}

export async function login(email, password) {
	await signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			AuthContext.currentUser = userCredential.user;
			return userCredential.user;
		})
		.catch((error) => {
			console.log(error.code, error.message);
		});
}

export async function logout() {
	signOut(auth)
		.then(() => {
			AuthContext.currentUser = null;
			console.log("Signed out successfully");
		})
		.catch((error) => {
			console.log(error.code, error.message);
		});
}

export async function getThisWeekData() {
	const querySnapshot = await getDocs(collection(db, "thisWeek"));
	const thisWeekArray = querySnapshot.docs.map((doc) => ({
		...doc.data(),
		id: doc.id
	}));
	return thisWeekArray[0].week1;
}

export async function getThisMonthData() {
	const querySnapshot = await getDocs(collection(db, "thisMonth"));
	const thisMonthArray = querySnapshot.docs.map((doc) => ({
		...doc.data(),
		id: doc.id
	}));
	return thisMonthArray[0];
}

export async function getThisYearData() {
	const querySnapshot = await getDocs(collection(db, "thisYear"));
	const thisYearArray = querySnapshot.docs.map((doc) => ({
		...doc.data(),
		id: doc.id
	}));
	return thisYearArray[0];
}
