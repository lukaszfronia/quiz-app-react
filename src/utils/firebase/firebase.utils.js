import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  query,
  getDocs,
  where,
  writeBatch,
  updateDoc,
} from "firebase/firestore";

import data from "../../data.js";
import { summary } from "../../summaryAllQuiz.js";
import category from "../../statisticQuizData.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnBsBYahwY2I1LAb7Fo2Q8B_vbkFqgZOE",
  authDomain: "quiz-math-db.firebaseapp.com",
  projectId: "quiz-math-db",
  storageBucket: "quiz-math-db.appspot.com",
  messagingSenderId: "502334601890",
  appId: "1:502334601890:web:10bd9ea10ef6379a71b5fb",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();

// Google Auth

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Sign Out
export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

// Sign In
export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

// Create Account
export const createUserAccountWithEmailAndPassword = async (
  email,
  password
) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

//Add account to database

export const db = getFirestore();

// Add data for user to database

export const addCollectionAndDocumentsToUser = async (user) => {
  const batch = writeBatch(db);
  let docRef;

  category.forEach((object) => {
    object.quizzes.forEach((q) => {
      docRef = doc(db, "users", user.uid, object.name, q.quiz);
      batch.set(docRef, q);
    });
  });

  await batch.commit();
  console.log("done");
};

export const addSummaryAllQuizToUser = async (user) => {
  const batch = writeBatch(db);
  let docRef;

  summary.forEach((object) => {
    object.categories.forEach((c) => {
      docRef = doc(db, "users", user.uid, object.name, c.category);
      batch.set(docRef, c);
    });
  });

  await batch.commit();
  console.log("done");
};

export const createUserDocumentFromAuth = async (
  userAuth,
  userAdditionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email, uid } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        uid,
        displayName,
        email,
        createdAt,
        ...userAdditionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};

export const addCollectionAndDocuments = async () => {
  const batch = writeBatch(db);
  let docRef;

  data.forEach((object) => {
    object.quizzes.forEach((quiz) => {
      docRef = doc(db, "Klasa 4 - 8", quiz.quizName);
      batch.set(docRef, quiz);
    });
  });

  await batch.commit();
  console.log("done");
};

// Get data from database

export const displayNameFromDatabase = async (user) => {
  if (!user) return;
  const collectionRef = collection(db, "users");
  const q = query(collectionRef, where("uid", "==", user.uid));
  const querySnapshot = await getDocs(q);

  const name = querySnapshot.docs.map((doc) => {
    const { displayName } = doc.data();
    return displayName;
  });

  return name;
};

export const getDataFromUserToCurrentQuiz = async (uid, classCategory) => {
  const collectionRef = collection(db, `users/${uid}/${classCategory}`);
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  const quizMap = querySnapshot.docs.map((docSnapshot) => {
    const { locked, passed, finalScore } = docSnapshot.data();

    return { locked, passed, finalScore };
  }, {});
  return quizMap;
};

export const getQuizzesandDocuments = async (col) => {
  const collectionRef = collection(db, col);
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const quizMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { quizName, questions } = docSnapshot.data();
    acc[quizName] = questions;
    return acc;
  }, {});
  return quizMap;
};

export const getDataSummaryForUser = async (uid) => {
  const collectionRef = collection(db, `users/${uid}/Podsumowanie`);
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  const summaryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { category, generalTime, numberOfApproaches, grade, passedQuizzes } =
      docSnapshot.data();
    acc[category] = { generalTime, numberOfApproaches, grade, passedQuizzes };
    return acc;
  }, {});
  return summaryMap;
};

///////////////////////////////////////////////////////UPDATE FUNCTIONS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

export const updateLockedQuizUser = async (uid, currentClass, quiz) => {
  const collectionRef = doc(db, `/users/${uid}/${currentClass}/${quiz}`);

  await updateDoc(collectionRef, {
    locked: false,
  });
};

export const updateFinalResultUser = async (
  uid,
  currentClass,
  quiz,
  finalResult
) => {
  const collectionRef = doc(db, `/users/${uid}/${currentClass}/${quiz}`);

  await updateDoc(collectionRef, {
    finalScore: +`${finalResult}`,
  });
};

export const updatePassedQuizUser = async (uid, currentClass, quiz) => {
  const collectionRef = doc(db, `/users/${uid}/${currentClass}/${quiz}`);

  await updateDoc(collectionRef, {
    passed: true,
  });
};
