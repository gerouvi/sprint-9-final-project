import { deleteUserFunction } from '../firebase/firebase-auth';

export const handlerDeleteUserAccount = async (uid, password) => {
  try {
    await deleteUserFunction(uid);
  } catch (err) {
    console.log(err.message);
  }
};
