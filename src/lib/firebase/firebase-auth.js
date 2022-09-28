import { auth } from './firebase-config';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  reauthenticateWithCredential,
  EmailAuthProvider,
  updateEmail,
  updatePassword,
  deleteUser,
} from 'firebase/auth';

//Auth

export const getUid = () => {
  return auth.currentUser.uid;
};

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

export const sendPasswordResetEmailFunction = (email) => {
  return sendPasswordResetEmail(auth, email);
};

export const reauthenticateWithCredentialFunction = (password) => {
  const credential = EmailAuthProvider.credential(
    auth.currentUser.email,
    password
  );
  return reauthenticateWithCredential(auth.currentUser, credential);
};

export const updateEmailFunction = (newEmail) => {
  return updateEmail(auth.currentUser, newEmail);
};

export const updatePasswordFunction = (newPassword) => {
  return updatePassword(auth.currentUser, newPassword);
};

export const deleteUserFunction = () => {
  return deleteUser(auth.currentUser);
};
