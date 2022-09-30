import { getUid } from '../firebase/firebase-auth';
import {
  deleteDocFunction,
  getDocFunction,
  getDocsFunction,
  updateDocFunction,
} from '../firebase/firebase-firestore';
import { handlerGetListAfterUpdateDelete } from './handlerGetListAfterUpdateDelete';
import { handlerSortAndStringOptions } from './handlerSortAndStringOptions';

//Delete doc
export const handlerDeleteWords = async (
  option1,
  option2,
  id,
  accLimit,
  setWords
) => {
  console.log('handleDeleteWords');

  const limit = accLimit < 0 ? 0 : accLimit;
  try {
    const uid = getUid();
    const pairOfLanguages = handlerSortAndStringOptions(option1, option2);
    const path = `${uid}/${pairOfLanguages}/${id}`;

    await deleteDocFunction(path);
    handlerGetListAfterUpdateDelete(option1, option2, limit, setWords);
    deleteLanguagesResum(option1, option2);
  } catch (err) {
    console.log(err);
  }
};

//Delete options select
const deleteLanguagesResum = async (option1, option2) => {
  const uid = getUid();

  try {
    const newPairOfLanguages = handlerSortAndStringOptions(option1, option2);
    const docs = await getDocsFunction(`users/${uid}/${newPairOfLanguages}`);
    const arrayDocs = docs.docs.map((el) => ({ ...el.data() }));
    if (!arrayDocs.length) {
      const doc = await getDocFunction(uid);
      const result = doc.data();
      result.languagesResum = result.languagesResum.filter(
        (el) => el !== newPairOfLanguages
      );
      await updateDocFunction(uid, result);
    }
  } catch (err) {
    console.log(err);
  }
};
