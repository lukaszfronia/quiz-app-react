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

const category = [
  {
    name: "Klasa 1 - 3",
    quizzes: [
      {
        quiz: "Quiz 0",
        passes: false,
        locked: true,
        finalScore: 0,
      },
      {
        quiz: "Quiz 1",
        passes: false,
        locked: false,
        finalScore: 0,
      },
      {
        quiz: "Quiz 2",
        passes: false,
        locked: false,
        finalScore: 0,
      },
      {
        quiz: "Quiz 3",
        passes: false,
        locked: false,
        finalScore: 0,
      },
      {
        quiz: "Quiz 4",
        passes: false,
        locked: false,
        finalScore: 0,
      },
      {
        quiz: "Quiz 5",
        passes: false,
        locked: false,
        finalScore: 0,
      },
      {
        quiz: "Quiz 6",
        passes: false,
        locked: false,
        finalScore: 0,
      },
      {
        quiz: "Quiz 7",
        passes: false,
        locked: false,
        finalScore: 0,
      },
      {
        quiz: "Quiz 8",
        passes: false,
        locked: false,
        finalScore: 0,
      },
      {
        quiz: "Quiz 9",
        passes: false,
        locked: false,
        finalScore: 0,
      },
    ],
  },
  {
    name: "Klasa 4 - 8",
    quizzes: [
      {
        quiz: "Quiz 0",
        passes: false,
        locked: true,
        finalScore: 0,
      },
      {
        quiz: "Quiz 1",
        passes: false,
        locked: false,
        finalScore: 0,
      },
      {
        quiz: "Quiz 2",
        passes: false,
        locked: false,
        finalScore: 0,
      },
      {
        quiz: "Quiz 3",
        passes: false,
        locked: false,
        finalScore: 0,
      },
      {
        quiz: "Quiz 4",
        passes: false,
        locked: false,
        finalScore: 0,
      },
      {
        quiz: "Quiz 5",
        passes: false,
        locked: false,
        finalScore: 0,
      },
      {
        quiz: "Quiz 6",
        passes: false,
        locked: false,
        finalScore: 0,
      },
      {
        quiz: "Quiz 7",
        passes: false,
        locked: false,
        finalScore: 0,
      },
      {
        quiz: "Quiz 8",
        passes: false,
        locked: false,
        finalScore: 0,
      },
      {
        quiz: "Quiz 9",
        passes: false,
        locked: false,
        finalScore: 0,
      },
    ],
  },
  {
    name: "Tech - Liceum",
    quizzes: [
      {
        quiz: "Quiz 0",
        passes: false,
        locked: true,
        finalScore: 0,
      },
      {
        quiz: "Quiz 1",
        passes: false,
        locked: false,
        finalScore: 0,
      },
      {
        quiz: "Quiz 2",
        passes: false,
        locked: false,
        finalScore: 0,
      },
      {
        quiz: "Quiz 3",
        passes: false,
        locked: false,
        finalScore: 0,
      },
      {
        quiz: "Quiz 4",
        passes: false,
        locked: false,
        finalScore: 0,
      },
      {
        quiz: "Quiz 5",
        passes: false,
        locked: false,
        finalScore: 0,
      },
      {
        quiz: "Quiz 6",
        passes: false,
        locked: false,
        finalScore: 0,
      },
      {
        quiz: "Quiz 7",
        passes: false,
        locked: false,
        finalScore: 0,
      },
      {
        quiz: "Quiz 8",
        passes: false,
        locked: false,
        finalScore: 0,
      },
      {
        quiz: "Quiz 9",
        passes: false,
        locked: false,
        finalScore: 0,
      },
    ],
  },
];

export const db = getFirestore();

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
    const { locked, passes, finalScore } = docSnapshot.data();

    return { locked, passes, finalScore };
  }, {});
  return quizMap;
};

console.log(getDataFromUserToCurrentQuiz());
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

//addCollectionAndDocuments();

export const updateDataUser = async (uid, currentClass, quiz) => {
  const collectionRef = doc(db, `/users/${uid}/${currentClass}/${quiz}`);

  await updateDoc(collectionRef, {
    locked: true,
  });

  console.log(collectionRef);
};

//updateDataUser();
