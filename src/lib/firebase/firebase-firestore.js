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
