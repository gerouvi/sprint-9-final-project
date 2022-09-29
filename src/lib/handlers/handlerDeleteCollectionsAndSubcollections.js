import { getUid } from '../firebase/firebase-auth';
import {
  deletDocsFunction,
  getDocFunction,
  getDocsFunction,
} from '../firebase/firebase-firestore';

export const handlerDeleteCollectionsAndSubcollection = async () => {
  const uid = getUid();
  try {
    const docUserResums = await getDocFunction(uid);
    const languagesResum = docUserResums.data().languagesResum;
    languagesResum.forEach((pairOfLanguages) => {
      getDocsPairOfLanguages(uid, pairOfLanguages);
    });
    deleteDoc(uid);
  } catch (err) {
    console.log(err.message);
  }
};

const getDocsPairOfLanguages = async (uid, pairOfLanguages) => {
  try {
    const docsPairOfLanguages = await getDocsFunction(
      `users/${uid}/${pairOfLanguages}`
    );

    const idsDocs = docsPairOfLanguages.docs.map((doc) => ({
      id: doc.id,
    }));

    idsDocs.map((id) => deleteDoc(`${uid}/${pairOfLanguages}/${id.id}`));
  } catch (err) {
    console.log(err);
  }
};

const deleteDoc = async (path) => {
  try {
    await deletDocsFunction(path);
  } catch (err) {
    console.log(err);
  }
};
