import { getUid } from '../firebase/firebase-auth';
import {
  deletDocsFunction,
  getDocFunction,
} from '../firebase/firebase-firestore';
import { handlerSortAndStringOptions } from './handlerSortAndStringOptions';

export const handlerDeleteCollectionsAndSubcollection = async () => {
  const uid = getUid();
  try {
    const docUserResums = await getDocFunction(uid);
    const languagesResum = docUserResums.data().languagesResum;
    languagesResum.forEach((pairOfLanguages) => {
      handlerSortAndStringOptions(uid, pairOfLanguages);
    });
    deleteDoc(uid);
  } catch (err) {
    console.log(err.message);
  }
};
const deleteDoc = async (path) => {
  try {
    await deletDocsFunction(path);
  } catch (err) {
    console.log(err);
  }
};
