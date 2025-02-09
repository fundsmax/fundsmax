import { useState, useEffect } from 'react';
import { auth } from '../firebaseConfig';
import { sendEmailVerification } from "firebase/auth";
import Link from 'next/link';

const CheckEmail = () => {
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => setTimer(timer - 1), 1000);
      return () => clearInterval(countdown);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleResendVerification = async () => {
    const user = auth.currentUser;
    if (user) {
      try {
        await sendEmailVerification(user);
        setMessage('Verification email has been resent. Please check your inbox and spam/junk folder.');
        setTimer(60);
        setCanResend(false);
      } catch (error) {
        setMessage(`Error resending email: ${error.message}`);
      }
    }
  };

  return (
    <div className="container fade-in">
      <div className="form-container">
        <h1 className="text-3xl font-bold mb-4">Verify Your Email</h1>
        <p>We have sent a verification email to your address. Please check your email and click on the verification link to activate your account.</p>
        <p className="mt-4 text-red-500">Your account is currently unverified. Please verify it to gain access and start using the platform.</p>
        <p className="mt-4 text-yellow-500">If you didn't receive the email, please check your spam and junk folders.</p>
        {message && <p className="mt-4 text-green-500">{message}</p>}
        <p className="mt-4">
          {canResend ? (
            <button onClick={handleResendVerification} className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition-colors">
              Resend Verification Email
            </button>
          ) : (
            <span>Resend available in {timer} seconds</span>
          )}
        </p>
        <p className="mt-4">Once verified, you can <Link href="/login"><span className="text-white font-bold">Login</span></Link>.</p>
      </div>
    </div>
  );
};

export default CheckEmail;