import { db } from './firebaseConfig';
import { doc, updateDoc, getDoc } from 'firebase/firestore';

// Function to handle investment
const investInPlan = async (userId, plan) => {
  try {
    const userDocRef = doc(db, 'users', userId);
    const userDocSnap = await getDoc(userDocRef);

    if (!userDocSnap.exists()) {
      console.log('No such user!');
      return;
    }

    const userData = userDocSnap.data();
    const currentBalance = userData.balance || 0;

    // Check if the user has enough balance to invest
    if (currentBalance < plan.investment) {
      console.log('Insufficient balance for investment');
      return;
    }

    const newBalance = currentBalance - plan.investment;
    const newInvestment = {
      planId: plan.id,
      name: plan.name,
      amount: plan.investment,
      interestRate: plan.profit,
      duration: plan.returnTime,
      startDate: new Date().toISOString(),
      returnAmount: plan.returnAmount,
      status: 'active'
    };

    const newInvested = (userData.invested || 0) + plan.investment;
    const updatedInvestments = [...(userData.investments || []), newInvestment];

    await updateDoc(userDocRef, {
      balance: newBalance,
      invested: newInvested,
      investments: updatedInvestments
    });

    console.log('Investment successful');
  } catch (error) {
    console.error('Error handling investment: ', error);
  }
};

export { investInPlan };