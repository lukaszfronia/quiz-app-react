import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updatePassword,
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
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";

import data from "../../data.js";
import { summary } from "../../summaryAllQuiz.js";
import category from "../../statisticQuizData.js";
import dataKlasa48 from "../../dataKlasa48.js";
import dataTL from "../../dataTL.js";

import generalStats from "../../generalStatistic.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMF9SBtUkqUCUCYyeMm8UorJuAhiii3rA",
  authDomain: "math-app-12d88.firebaseapp.com",
  projectId: "math-app-12d88",
  storageBucket: "math-app-12d88.appspot.com",
  messagingSenderId: "1037781149514",
  appId: "1:1037781149514:web:55cba5fed6cfc6eb6f43b3",
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
export const addGeneralStatsForUser = async (user) => {
  const batch = writeBatch(db);

  const docRef = doc(db, "Ranking", user.uid);
  generalStats.forEach((object) => {
    batch.set(docRef, object);
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

export const createRankingDocument = async (userAuth) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "Ranking", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName } = userAuth;

    try {
      await setDoc(userDocRef, {
        displayName,
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

  dataTL.forEach((object) => {
    object.quizzes.forEach((quiz) => {
      docRef = doc(db, "Tech - Liceum", quiz.quizName);
      batch.set(docRef, quiz);
    });
  });

  await batch.commit();
  console.log("done");
};
// addCollectionAndDocuments();

export const addCreatedQuizzesToDatabase = async (data) => {
  const batch = writeBatch(db);
  let docRef;
  docRef = doc(db, "Stworzone Quizy", data?.quizName);
  batch.set(docRef, data);

  await batch.commit();
  console.log("done");
};

// addCreatedQuizzesToDatabase();
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

export const getQuizzesInformationForAllUser = (
  uid,
  classCategory,
  setQuizInformationFromCurrentUser
) => {
  const collectionRef = collection(db, `users/${uid}/${classCategory}`);

  onSnapshot(collectionRef, (snapshot) => {
    let items = [];
    snapshot.docs.map((doc) => {
      items.push({ ...doc.data() });
    });
    setQuizInformationFromCurrentUser(items);
  });
};

export const getAllQuizzesWithItems = (col, setQizzes) => {
  const collectionRef = collection(db, `${col}`);

  onSnapshot(collectionRef, (snapshot) => {
    let items = {};
    snapshot.docs.reduce((acc, doc) => {
      acc = { questions: doc.data().questions };
      items[doc.data().quizName] = acc;
    }, {});
    setQizzes(items);
  });
};

export const getDataSummaryForUser = (uid, setSummaryQuiz) => {
  const collectionRef = collection(db, `users/${uid}/Podsumowanie`);

  onSnapshot(collectionRef, (snapshot) => {
    let items = {};
    snapshot.docs.reduce((acc, doc) => {
      acc = { ...doc.data() };
      items[doc.data().category] = acc;
    }, {});
    setSummaryQuiz(items);
  });
};

export const getAllUsers = (setAllUserUid) => {
  const collectionRef = collection(db, `users`);

  onSnapshot(collectionRef, (snapshot) => {
    let items = [];
    snapshot.docs.map((doc) => {
      items.push({ uid: doc.data().uid });
    });
    setAllUserUid(items);
  });
};

export const getGeneralStatsForAllUsers = (setGeneralStatistics) => {
  const collectionRef = collection(db, `Ranking/`);

  onSnapshot(collectionRef, (snapshot) => {
    let items = [];
    snapshot.docs.map((doc) => {
      items.push({ ...doc.data() });
    });
    setGeneralStatistics(items);
  });
};
export const getCreatedQuizzes = (setQuizzes) => {
  const collectionRef = collection(db, `Stworzone Quizy/`);

  onSnapshot(collectionRef, (snapshot) => {
    let items = [];
    snapshot.docs.reduce((acc, doc) => {
      acc = { ...doc.data() };
      items[doc.data().quizName] = acc;
    }, {});
    setQuizzes(items);
  });
};

export const getCreatedQuizzesToDisplay = (setCreatedQuizzesToDisplay) => {
  const collectionRef = collection(db, `Stworzone Quizy/`);

  onSnapshot(collectionRef, (snapshot) => {
    let items = [];
    snapshot.docs.map((doc) => {
      items.push({ ...doc.data() });
    });

    setCreatedQuizzesToDisplay(items);
  });
};
export const getGeneralStatsForCurrentUser = (
  uid,
  setUserGeneralStatistics
) => {
  const collectionRef = doc(db, `Ranking/${uid}`);

  onSnapshot(collectionRef, (snapshot) => {
    let items = [];
    items.push({ ...snapshot.data() });
    setUserGeneralStatistics(items);
  });
};

///////////////////////////////////////////////////////UPDATE FUNCTIONS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

export const updateLockedQuizUser = async (uid, currentClass, quiz) => {
  const collectionRef = doc(db, `/users/${uid}/${currentClass}/${quiz}`);

  await updateDoc(collectionRef, {
    locked: false,
  });
};
export const updateIsFirstOpenQuiz = async (uid, currentClass, quiz) => {
  const collectionRef = doc(db, `/users/${uid}/${currentClass}/${quiz}`);

  await updateDoc(collectionRef, {
    isFirstOpen: true,
  });
};
export const addUserNameToGeneralStats = async (user, displayName) => {
  const collectionRef = doc(db, `/Ranking/${user.uid}`);

  await updateDoc(collectionRef, {
    displayName: `${displayName}`,
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
  if (!uid || !currentClass || !quiz) return;
  const collectionRef = doc(db, `/users/${uid}/${currentClass}/${quiz}`);

  await updateDoc(collectionRef, {
    passed: true,
  });
};
export const updatePerformedQuizUser = async (uid, currentClass, quiz) => {
  if (!uid || !currentClass || !quiz) return;
  const collectionRef = doc(db, `/users/${uid}/${currentClass}/${quiz}`);

  await updateDoc(collectionRef, {
    performed: true,
  });
};
export const updateUsedTimeQuizUser = async (
  uid,
  currentClass,
  quiz,
  time,
  usedTime
) => {
  const collectionRef = doc(db, `/users/${uid}/${currentClass}/${quiz}`);

  await updateDoc(collectionRef, {
    usedTime: time + usedTime,
  });
};

export const updateGradeQuizUser = async (uid, currentClass, quiz, grade) => {
  const collectionRef = doc(db, `/users/${uid}/${currentClass}/${quiz}`);

  await updateDoc(collectionRef, {
    grade: grade,
  });
};

export const updateCountPassedCurrentUserQuiz = async (
  uid,
  currentClass,
  passedQuizzes
) => {
  const collectionRef = doc(db, `/users/${uid}/Podsumowanie/${currentClass}`);

  await updateDoc(collectionRef, {
    passedQuizzes: passedQuizzes + 1,
  });
};

export const updateCountPassedAllQuizzes = async (uid, passedAllQuizzes) => {
  const collectionRef = doc(db, `/Ranking/${uid}`);

  await updateDoc(collectionRef, {
    passedAllQuizzes: passedAllQuizzes + 1,
  });
};

export const updateNumbersOfApproachesCurrentUserQuiz = async (
  uid,
  currentClass,
  numberOfApproaches
) => {
  const collectionRef = doc(db, `/users/${uid}/Podsumowanie/${currentClass}`);

  await updateDoc(collectionRef, {
    numberOfApproaches: numberOfApproaches + 1,
  });
};

// export const updateGradeCurrentUserQuiz = async (
//   uid,
//   currentClass,
//   grade
// ) => {
//   const collectionRef = doc(db, `/users/${uid}/Podsumowanie/${currentClass}`);

//   await updateDoc(collectionRef, {
//     numberOfApproaches: numberOfApproaches + 1,
//   });
// };

export const updateMadeQuizzesCurrentUserQuiz = async (
  uid,
  currentClass,
  madeQuizzes
) => {
  const collectionRef = doc(db, `/users/${uid}/Podsumowanie/${currentClass}`);

  await updateDoc(collectionRef, {
    madeQuizzes: madeQuizzes + 1,
  });
};

export const updateBestTimeCurrentUserQuiz = async (
  uid,
  currentClass,
  bestTime
) => {
  const collectionRef = doc(db, `/users/${uid}/Podsumowanie/${currentClass}`);

  await updateDoc(collectionRef, {
    bestTime: bestTime,
  });
};

export const updateGeneralBestTime = async (uid, bestTime) => {
  const collectionRef = doc(db, `/Ranking/${uid}`);

  await updateDoc(collectionRef, {
    bestTime: bestTime,
  });
};

export const updadateCurrentQuestionHint = async (
  uid,
  currentClass,
  currentQuiz,
  currentQuestion
) => {
  const collectionRef = doc(db, `/users/${uid}/${currentClass}/${currentQuiz}`);

  await updateDoc(collectionRef, {
    [`${currentQuestion}`]: { hint: false },
  });
};

export const updadateCurrentQuestionHintAll = async (
  uid,
  currentClass,
  currentQuiz,
  currentQuestion
) => {
  const collectionRef = doc(db, `/users/${uid}/${currentClass}/${currentQuiz}`);

  await updateDoc(collectionRef, {
    [`0`]: { hint: true },
    [`1`]: { hint: true },
    [`2`]: { hint: true },
    [`3`]: { hint: true },
  });
};

export const setNewPassword = async (user, newPassword) =>
  await updatePassword(user, newPassword);

export const deleteCreatedQuiz = async (quizName) => {
  await deleteDoc(doc(db, `/Stworzone Quizy/${quizName}`));
};
