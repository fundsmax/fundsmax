import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import DepositModal from '../components/DepositModal';
import WithdrawModal from '../components/WithdrawModal';
import InvestmentPlans from '../components/InvestmentPlans'; // Correct path to InvestmentPlans.js

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [balance, setBalance] = useState(0);
  const [invested, setInvested] = useState(0);
  const [pendingWithdrawals, setPendingWithdrawals] = useState(0);
  const [showDepositModal, setShowDepositModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          const data = userDoc.data();
          setUser(data);
          setBalance(data.balance || 0);
          setInvested(data.invested || 0);
          setPendingWithdrawals(data.pendingWithdrawals || 0);
        }
      }
    };

    fetchUserData();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className='dashboard-container'>
      <h1 className='dashboard-title'>Dashboard</h1>
      <div className='dashboard-grid'>
        <div className='dashboard-box'>
          <h2>Available Balance</h2>
          <p>RS. {balance}</p>
        </div>
        <div className='dashboard-box'>
          <h2>Currently Invested Amount</h2>
          <p>RS. {invested}</p>
        </div>
        <div className='dashboard-box'>
          <h2>Pending Withdrawal</h2>
          <p>RS. {pendingWithdrawals}</p>
        </div>
      </div>
      <div className='dashboard-buttons'>
        <button onClick={() => setShowDepositModal(true)} className='dashboard-button'>Deposit</button>
        <button onClick={() => setShowWithdrawModal(true)} className='withdraw-button'>Withdraw</button>
      </div>
      {showDepositModal && <DepositModal closeModal={() => setShowDepositModal(false)} userId={auth.currentUser.uid} />}
      {showWithdrawModal && <WithdrawModal closeModal={() => setShowWithdrawModal(false)} userId={auth.currentUser.uid} availableBalance={balance} />}

      <h1 className='section-title'>Investment Plans</h1>
      <InvestmentPlans userId={auth.currentUser.uid} balance={balance} updateBalance={setBalance} />

      <h1 className='section-title'>Referral Program</h1>
      <div className='referral-program'>
        <div className='referral-box'>
          <h3>1st Tier</h3>
          <p><strong>Commission:</strong> 10%</p>
          <p>Earn 10% commission on investments made by directly referred users.</p>
        </div>
        <div className='referral-box'>
          <h3>2nd Tier</h3>
          <p><strong>Commission:</strong> 20%</p>
          <p>Earn 20% commission on investments made by users referred by your direct referrals.</p>
        </div>
        <div className='referral-box'>
          <h3>3rd Tier</h3>
          <p><strong>Commission:</strong> 30%</p>
          <p>Earn 30% commission on investments made by users referred by your second-tier referrals.</p>
        </div>
        <div className='referral-box'>
          <h3>Your Referral ID</h3>
          <p>{user.email}</p>
          <p>Share your email address to refer new users and earn commissions.</p>
        </div>
        <div className='referral-box'>
          <button onClick={() => window.location.href = 'https://t.me/FundMaxOfficial'} className='affiliate-button'>Join Affiliate Program</button>
        </div>
      </div>

      <h1 className='section-title'>Customer Support</h1>
      <div className='customer-support'>
        <div className='support-box'>
          <h3>Email</h3>
          <p>info.fundmax@gmail.com</p>
          <p>If you encounter any issues or have any questions, feel free to email us.</p>
        </div>
        <div className='support-box'>
          <h3>Telegram</h3>
          <p><a href='https://t.me/FundMaxOfficial' target='_blank' rel='noopener noreferrer'>https://t.me/FundMaxOfficial</a></p>
          <p>Contact us on Telegram for quick support and updates.</p>
        </div>
      </div>

      <h1 className='section-title'>What We Do</h1>
      <div className='what-we-do'>
        <div className='what-we-do-box'>
          <h3>Investments in Dropshipping</h3>
          <p>We invest your payments in dropshipping products, ensuring you receive profits in a legit and secure way.</p>
        </div>
        <div className='what-we-do-box'>
          <h3>Secure Transactions</h3>
          <p>Your funds are handled with the highest level of security, making sure your investments are safe.</p>
        </div>
        <div className='what-we-do-box'>
          <h3>Transparent Process</h3>
          <p>We maintain transparency in our investment process, providing you with regular updates on your profits and investments.</p>
        </div>
        <div className='what-we-do-box'>
          <h3>Customer Support</h3>
          <p>Our dedicated customer support team is here to assist you with any questions or issues you may have.</p>
        </div>
      </div>

      <style jsx>{`
        .dashboard-container {
          padding: 20px;
        }

        .dashboard-title, .section-title {
          margin-bottom: 20px;
          color: #fff;
          font-weight: bold;
          font-size: 2rem;
        }

        .dashboard-grid {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .dashboard-box {
          border: 1px solid #ccc;
          border-radius: 10px;
          padding: 20px;
          width: 100%;
          max-width: 300px;
          background-color: #f9f9f9;
          text-align: center;
        }

        .dashboard-buttons {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .dashboard-button, .withdraw-button {
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          background-color: #007bff;
          color: #fff;
          cursor: pointer;
          transition: background-color 0.2s;
          flex-grow: 1;
          text-align: center;
        }

        .dashboard-button:hover, .withdraw-button:hover {
          background-color: #0056b3;
        }

        .referral-program, .customer-support, .what-we-do {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 20px;
          justify-content: center;
        }

        .referral-box, .support-box, .what-we-do-box {
          border: 1px solid #ccc;
          border-radius: 10px;
          padding: 20px;
          width: 100%;
          max-width: 300px;
          background-color: #f9f9f9;
          text-align: center;
          color: #000; /* Text color updated to black */
        }

        .referral-box h3, .support-box h3, .what-we-do-box h3 {
          font-weight: bold;
        }

        .affiliate-button {
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          background-color: #28a745;
          color: #fff;
          cursor: pointer;
          transition: background-color 0.2s;
          width: 100%;
        }

        .affiliate-button:hover {
          background-color: #218838;
        }

        .support-box a {
          color: #007bff;
          text-decoration: none;
        }

        .support-box a:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .dashboard-grid, .referral-program, .customer-support, .what-we-do {
            flex-direction: column;
            align-items: center;
          }

          .dashboard-box, .referral-box, .support-box, .what-we-do-box {
            width: 100%;
            max-width: 100%;
          }

          .dashboard-button, .withdraw-button, .affiliate-button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;