import { useState } from 'react';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/router';
import Link from 'next/link';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Check if the email is verified
      if (user.emailVerified) {
        router.push('/dashboard'); // Navigate to the dashboard
      } else {
        router.push('/check-email'); // Redirect to the check email page
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError("Invalid email or password");
    }
  };

  return (
    <div className="container fade-in">
      <div className="form-container">
        <h1 className="text-3xl font-bold mb-4">Login to FundMax</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
        </form>
        {error && <p className="error-message">{error}</p>}
        <p className="mt-4">
          <Link href="/forgot-password">Forgot Password?</Link>
        </p>
        <p className="mt-4">Don't have an account? <Link href="/signup"><span className="text-white font-bold">Sign up</span></Link></p>
      </div>
    </div>
  );
};

export default Login;