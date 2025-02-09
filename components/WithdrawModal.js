// components/WithdrawModal.js
import React, { useState } from 'react';

const WithdrawModal = ({ closeModal, userId, availableBalance }) => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [amount, setAmount] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [accountTitle, setAccountTitle] = useState('');

  const handleWithdrawClick = () => {
    const withdrawAmount = parseInt(amount);

    if (withdrawAmount > availableBalance) {
      alert('Insufficient balance');
      return;
    }
    if (withdrawAmount < 1000) {
      alert('Minimum withdrawal amount is 1000 RS.');
      return;
    }

    // Direct the user to the Telegram link
    alert('Withdrawal request submitted. You will be redirected to Telegram.');
    window.location.href = 'https://t.me/FundMaxOfficial';
  };

  const paymentMethods = [
    'Jazzcash', 'Easypaisa', 'Upaisa', 'Zindgi', 'Konnect', 'UBL OMNI', 'Nayapay', 'Sadapay', 'Pakistani Bank', 
    'Paytm', 'Freecharge', 'Mobikwik', 'Oxigen', 'mRuppee', 'Airtel Money', 'Jio Money', 'SBI Buddy', 'itz Cash', 
    'Citrus Pay', 'Vodafone M-Pesa', 'Axis Bank Lime', 'ICICI Pockets', 'SpeedPay', 'Indian Banks'
  ];

  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <h2 className='modal-title'>Withdraw Options</h2>
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
                  className='w-full p-2 border rounded text-black'
                />
              </div>
              <div className='mb-4'>
                <label className='block mb-2'>Account Number</label>
                <input
                  type='text'
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  className='w-full p-2 border rounded text-black'
                />
              </div>
              <div className='mb-4'>
                <label className='block mb-2'>Account Title</label>
                <input
                  type='text'
                  value={accountTitle}
                  onChange={(e) => setAccountTitle(e.target.value)}
                  className='w-full p-2 border rounded text-black'
                />
              </div>
              <button type='button' onClick={handleWithdrawClick} className='modal-withdraw-button'>Withdraw</button>
            </form>
            <button onClick={() => setSelectedMethod(null)} className='modal-close-button'>Back</button>
          </div>
        )}
        <button onClick={closeModal} className='modal-close-button mt-4'>Close</button>
        <p className='mt-4'>If you face any issues, please contact us on <a href='https://t.me/FundMaxOfficial' target='_blank' rel='noopener noreferrer' className='text-blue-500'>Telegram</a>. You will receive your withdrawal within 24 hours.</p>
      </div>
    </div>
  );
};

export default WithdrawModal;