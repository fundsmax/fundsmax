import { useState, useEffect } from 'react';
import { auth, db } from '../firebaseConfig';
import { sendPasswordResetEmail } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import Link from 'next/link';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [resetError, setResetError] = useState('');
  const [resetMessage, setResetMessage] = useState('');
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    let countdown;
    if (timer > 0) {
      countdown = setInterval(() => setTimer(prevTimer => prevTimer - 1), 1000);
    } else {
      setCanResend(true);
    }
    return () => clearInterval(countdown);
  }, [timer]);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (!email) {
      setResetError("Please enter your registered email address");
      return;
    }

    // Check if the email is registered
    const userDoc = await getDoc(doc(db, "users", email));
    if (!userDoc.exists()) {
      setResetError("Email not linked to any account. Please try again with a registered email.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setResetMessage("Password reset email sent. Check your inbox and spam/junk folder.");
      setResetError('');
      setTimer(60); // Reset the timer
      setCanResend(false);
    } catch (error) {
      console.error('Error sending password reset email:', error);
      setResetError("Error sending password reset email. Please try again.");
    }
  };

  return (
    <div className="container fade-in">
      <div className="form-container">
        <h1 className="text-3xl font-bold mb-4">Forgot Password</h1>
        <form onSubmit={handleForgotPassword}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your registered email"
            required
          />
          <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition-colors mt-2">
            Send Password Reset Email
          </button>
        </form>
        {resetError && <p className="error-message">{resetError}</p>}
        {resetMessage && <p className="success-message">{resetMessage}</p>}
        <p className="mt-4 text-yellow-500">If you didn't receive the email, check your spam/junk folders.</p>
        <p className="mt-4">
          {canResend ? (
            <button onClick={handleForgotPassword} className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition-colors">
              Resend Password Reset Email
            </button>
          ) : (
            <span>Resend available in {timer} seconds</span>
          )}
        </p>
        <p className="mt-4">
          <Link href="/login">Back to Login</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;