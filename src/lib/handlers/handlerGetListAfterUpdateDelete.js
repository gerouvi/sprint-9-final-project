import { getUid } from '../firebase/firebase-auth';
import { getWordsListDocsLimiAfterUpdate } from '../firebase/firebase-firestore';
import { handlerSortAndStringOptions } from './handlerSortAndStringOptions';

export const handlerGetListAfterUpdateDelete = async (
  option1,
  option2,
  listLength,
  setListOfWords
) => {
  console.log('handleGetListOfWordsAfterUpdate');
  const uid = getUid();
  //order options
  const optionsOrder = handlerSortAndStringOptions(option1, option2);

  try {
    console.log('a');
    const data = await getWordsListDocsLimiAfterUpdate(
      `users/${uid}/${optionsOrder}`,
      option1,
      listLength
    );

    const docs = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    console.log(docs);

    setListOfWords(docs);
  } catch (err) {
    console.log(err.message);
  }
};
