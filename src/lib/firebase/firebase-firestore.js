import { db } from './firebase-config';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  startAfter,
  updateDoc,
  where,
} from 'firebase/firestore';

export const getServerTimestamp = () => {
  return serverTimestamp();
};

export const getDocFunction = (path) => {
  const docRef = doc(db, 'users', path);
  return getDoc(docRef);
};

export const addDocFunction = (path, newData) => {
  const collectionRef = collection(db, path);
  return addDoc(collectionRef, { ...newData });
};

export const setDocFunction = (path, newDoc) => {
  const docRef = doc(db, 'users', path);
  return setDoc(docRef, newDoc);
};

export const getWordsListDocsLimit = (path, option1, last, lim) => {
  const q = query(
    collection(db, path),
    orderBy(option1, 'asc'),
    startAfter(last),
    limit(lim)
  );

  return getDocs(q);
};

export const updateDocFunction = (path, newData) => {
  const docRef = doc(db, 'users', path);
  return updateDoc(docRef, newData);
};

export const getWordsListDocsLimiAfterUpdate = (path, option1, accLimit) => {
  console.log('b', path, option1, accLimit);
  const q = query(
    collection(db, path),
    orderBy(option1, 'asc'),

    limit(accLimit)
  );

  return getDocs(q);
};

export const deleteDocFunction = (path) => {
  const docRef = doc(db, 'users', path);
  return deleteDoc(docRef);
};
export const getDocsFunction = (path) => {
  const collectionRef = collection(db, path);
  return getDocs(collectionRef);
};

export const deletDocsFunction = (path) => {
  const docRef = doc(db, 'users', path);
  return deleteDoc(docRef);
};

export const getDocsSelectedForGame = (path) => {
  const q = query(collection(db, path), where('selectedForGames', '==', true));
  return getDocs(q);
};
