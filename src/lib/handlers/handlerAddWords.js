import { getUid } from '../firebase/firebase-auth';
import {
  addDocFunction,
  getDocFunction,
  getServerTimestamp,
  setDocFunction,
} from '../firebase/firebase-firestore';

const sortAndStringLanguages = (option1, option2) => {
  const optionsSorted = [];
  optionsSorted.push(option1);
  optionsSorted.push(option2);
  optionsSorted.sort();
  return optionsSorted[0] + '-' + optionsSorted[1];
};

//Update options select
const updateLanguagesResum = async (option1, option2) => {
  const uid = getUid();
  try {
    const doc = await getDocFunction(uid);

    const languagesResum = postUpdatedLanguagesResum(doc, option1, option2);

    await setDocFunction(uid, { languagesResum });
  } catch (err) {
    console.log(err.message);
  }
};

//Post options select
const postUpdatedLanguagesResum = (doc, option1, option2) => {
  let languagesResum = [];

  const newPairOfLanguages = sortAndStringLanguages(option1, option2);

  if (doc.data()) languagesResum = doc.data().languagesResum;

  languagesResum.push(newPairOfLanguages);

  return languagesResum.filter((language, index) => {
    return languagesResum.indexOf(language) === index;
  });
};

export const handleAddWords = async (
  word1,
  word2,
  option1,
  option2,
  handleResetFieldsTranslate
) => {
  const languagesCollectionName = sortAndStringLanguages(option1, option2);
  const uid = getUid();
  const path = `users/${uid}/${languagesCollectionName}`;

  const serverTimestamp = getServerTimestamp();
  try {
    await addDocFunction(path, {
      [option1]: word1.toLowerCase().trim(),
      [option2]: word2.toLowerCase().trim(),
      createdAt: serverTimestamp,
      selectedForGames: false,
    });
    updateLanguagesResum(option1, option2);
    handleResetFieldsTranslate();
  } catch (err) {
    console.log(err.message);
  }
};
