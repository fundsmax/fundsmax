import React from 'react';
import investmentPlans from '../data/investmentPlans';
import { investInPlan } from '../firebaseFunctions';

const InvestmentPlans = ({ userId, balance, updateBalance }) => {
  const handleInvest = async (plan) => {
    if (plan.name === 'Collab With Us') {
      // Redirect to Telegram if "Collab With Us" plan is clicked
      window.location.href = 'https://t.me/your_telegram_link'; // Replace with your actual Telegram link
      return;
    }

    if (balance < plan.investment) {
      alert('Insufficient balance for this investment plan.');
      return;
    }

    await investInPlan(userId, plan);
    updateBalance(balance - plan.investment);
    alert('Investment successful!');
  };

  return (
    <div className='investment-plans'>
      <h2>Investment Plans</h2>
      <div className='plans-grid'>
        {investmentPlans.map((plan) => (
          <div key={plan.id} className='plan-card'>
            <h3>{plan.name}</h3>
            {plan.investment && <p>Investment: RS. {plan.investment}</p>}
            {plan.profit && <p>Profit: {plan.profit * 100}%</p>}
            {plan.returnTime && <p>Return Time: {plan.returnTime} hours</p>}
            {plan.returnAmount && <p>Return Amount: RS. {plan.returnAmount}</p>}
            {plan.profitRange && <p>Profit Range: {plan.profitRange}</p>}
            <button onClick={() => handleInvest(plan)}>Invest</button>
          </div>
        ))}
      </div>

      <style jsx>{`
        .investment-plans {
          padding: 20px;
        }

        .plans-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }

        .plan-card {
          border: 2px solid #ccc;
          border-radius: 10px;
          padding: 20px;
          width: 300px;
          background-color: #f9f9f9;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s;
        }

        .plan-card:hover {
          transform: scale(1.05);
          border-color: #007bff;
        }

        .plan-card h3 {
          margin: 0 0 10px;
          color: #007bff;
        }

        .plan-card p {
          margin: 5px 0;
          color: #000; /* Updated text color to black */
        }

        .plan-card button {
          margin-top: 10px;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          background-color: #007bff;
          color: #fff;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .plan-card button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default InvestmentPlans;