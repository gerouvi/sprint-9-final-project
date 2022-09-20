import { auth, db } from './firebase-config';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

//Auth

export const createUserWithEmailAndPasswordFunction = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const sendEmailVerificationFunction = () => {
  return sendEmailVerification(auth.currentUser);
};

export const signInWithEmailAndPasswordFunction = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signOutFunction = () => {
  return signOut(auth);
};
