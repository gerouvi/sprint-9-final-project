import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBSm1MiowREH2rYEoqnf2o2GUvvjc_EQBM',

  authDomain: 'memowords-a7568.firebaseapp.com',

  projectId: 'memowords-a7568',

  storageBucket: 'memowords-a7568.appspot.com',

  messagingSenderId: '477385318320',

  appId: '1:477385318320:web:d236b843cde07d1f21c075',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
