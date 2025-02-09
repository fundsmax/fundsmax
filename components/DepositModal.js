// components/DepositModal.js
import React, { useState } from 'react';

const DepositModal = ({ closeModal }) => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [amount, setAmount] = useState('');

  const paymentMethods = [
    'Jazzcash', 'Easypaisa', 'Upaisa', 'Zindgi', 'Konnect', 'UBL OMNI', 'Nayapay', 'Sadapay', 'Pakistani Bank', 
    'Paytm', 'Freecharge', 'Mobikwik', 'Oxigen', 'mRuppee', 'Airtel Money', 'Jio Money', 'SBI Buddy', 'itz Cash', 
    'Citrus Pay', 'Vodafone M-Pesa', 'Axis Bank Lime', 'ICICI Pockets', 'SpeedPay', 'Indian Banks'
  ];

  const handleDeposit = () => {
    if (amount < 1000) {
      alert('Minimum deposit amount is 1000 PKR');
      return;
    }
    window.location.href = 'https://t.me/FundMaxOfficial';
  };

  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <h2 className='modal-title'>Deposit Options</h2>
        {!selectedMethod ? (
          <div className='payment-options'>
            {paymentMethods.map((method) => (
              <div 
                key={method} 
                className='payment-option'
                onClick={() => setSelectedMethod(method)}
              >
                {method}
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h3 className='text-lg font-bold mb-4'>Selected Method: {selectedMethod}</h3>
            <form className='modal-form'>
              <div className='mb-4'>
                <label className='block mb-2'>Amount</label>
                <input
                  type='number'
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className='w-full p-2 border rounded'
                />
              </div>
              <button type='button' onClick={handleDeposit} className='modal-withdraw-button'>Deposit</button>
            </form>
            <button onClick={() => setSelectedMethod(null)} className='modal-close-button'>Back</button>
          </div>
        )}
        <button onClick={closeModal} className='modal-close-button mt-4'>Close</button>
      </div>
    </div>
  );
};

export default DepositModal;