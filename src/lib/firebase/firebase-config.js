import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAHtBeVEd5xS4JexAvu_ZltPqWNlaQWAU4',

  authDomain: 'sprint9-finalproject.firebaseapp.com',

  projectId: 'sprint9-finalproject',

  storageBucket: 'sprint9-finalproject.appspot.com',

  messagingSenderId: '727765099895',

  appId: '1:727765099895:web:5371fd09ea012881b5ed72',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
