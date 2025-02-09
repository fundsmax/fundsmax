import { db } from './firebaseConfig.js';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';

// Function to update all user documents with new fields
const updateUserSchema = async () => {
  try {
    const usersCollection = collection(db, 'users');
    const userDocs = await getDocs(usersCollection);

    userDocs.forEach(async (userDoc) => {
      const userRef = doc(db, 'users', userDoc.id);
      await updateDoc(userRef, {
        balance: userDoc.data().balance || 0,
        invested: userDoc.data().invested || 0,
        pendingWithdrawals: userDoc.data().pendingWithdrawals || 0,
      });
      console.log(`Updated user ${userDoc.id}`);
    });

    console.log('All user documents updated successfully');
  } catch (error) {
    console.error('Error updating user schema:', error);
  }
};

export { updateUserSchema };