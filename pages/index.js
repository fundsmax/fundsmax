import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-yellow-500 text-white min-h-screen">
      <Head>
        <title>FundMax</title>
        <meta name="description" content="Welcome to FundMax" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-between items-center p-5 bg-opacity-75 bg-gray-900">
        <h1 className="text-3xl font-bold">FundMax</h1>
        <nav>
          <a href="/signup" className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">Sign Up</a>
          <a href="/login" className="ml-4 px-4 py-2 bg-green-600 rounded hover:bg-green-700">Login</a>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center py-10">
        <h1 className="text-5xl font-bold mb-5">Welcome to FundMax</h1>
        <p className="text-2xl mb-10">Your trusted investment platform.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div className="bg-gray-800 p-5 rounded shadow-lg text-center">
            <h2 className="text-2xl font-bold">3 Million+</h2>
            <p>Registered Users</p>
          </div>
          <div className="bg-gray-800 p-5 rounded shadow-lg text-center">
            <h2 className="text-2xl font-bold">174</h2>
            <p>Countries Supported</p>
          </div>
          <div className="bg-gray-800 p-5 rounded shadow-lg text-center">
            <h2 className="text-2xl font-bold">$10.8 Million</h2>
            <p>Average Investment</p>
          </div>
        </div>
        <section className="bg-gray-900 p-5 rounded shadow-lg mb-10">
          <h2 className="text-3xl font-bold mb-3">About Us</h2>
          <p>We empower you to grow your wealth through small investments, offering reliable opportunities for long-term financial success.</p>
        </section>
        <section className="bg-gray-900 p-5 rounded shadow-lg mb-10">
          <h2 className="text-3xl font-bold mb-3">Why Invest</h2>
          <p>We are a worldwide investment company committed to revenue maximization and reduction of financial risk.</p>
        </section>
        <section className="bg-gray-900 p-5 rounded shadow-lg mb-10">
          <h2 className="text-3xl font-bold mb-3">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gray-700 p-3 rounded text-center">
              <p className="text-xl font-bold">Instant Registration</p>
              <p>Click Sign Up</p>
            </div>
            <div className="bg-gray-700 p-3 rounded text-center">
              <p className="text-xl font-bold">Make an Investment</p>
              <p>Login to your account</p>
            </div>
            <div className="bg-gray-700 p-3 rounded text-center">
              <p className="text-xl font-bold">Get Profit</p>
              <p>24 hours profit guaranteed</p>
            </div>
          </div>
        </section>
        <section className="bg-gray-900 p-5 rounded shadow-lg mb-10">
          <h2 className="text-3xl font-bold mb-3">Latest Transactions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gray-700 p-3 rounded text-center">
              <p className="text-xl font-bold">Last Deposits</p>
              <p>$1000</p>
            </div>
            <div className="bg-gray-700 p-3 rounded text-center">
              <p className="text-xl font-bold">Last Withdrawals</p>
              <p>$500</p>
            </div>
            <div className="bg-gray-700 p-3 rounded text-center">
              <p className="text-xl font-bold">Last Investors</p>
              <p>$2000</p>
            </div>
          </div>
        </section>
        <section className="bg-gray-900 p-5 rounded shadow-lg mb-10">
          <h2 className="text-3xl font-bold mb-3">Affiliate Program</h2>
          <p>First tier: 10%, Second tier: 20%, Third tier: 30%</p>
        </section>
        <section className="bg-gray-900 p-5 rounded shadow-lg mb-10">
          <h2 className="text-3xl font-bold mb-3">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gray-700 p-3 rounded text-center">
              <p className="text-xl font-bold">John Doe</p>
              <p>"Excellent service!"</p>
            </div>
            <div className="bg-gray-700 p-3 rounded text-center">
              <p className="text-xl font-bold">Jane Smith</p>
              <p>"Highly recommend!"</p>
            </div>
            <div className="bg-gray-700 p-3 rounded text-center">
              <p className="text-xl font-bold">Bob Johnson</p>
              <p>"Great returns!"</p>
            </div>
          </div>
        </section>
        <section className="bg-gray-900 p-5 rounded shadow-lg mb-10">
          <h2 className="text-3xl font-bold mb-3">Contact Us</h2>
          <p>Email: info.fundmax@gmail.com</p>
          <p>Telegram: <a href="https://t.me/FundMaxOfficial">FundMaxOfficial</a></p>
        </section>
      </main>

      <footer className="flex justify-center items-center p-5 bg-opacity-75 bg-gray-900">
        <p>2025 FundMax | All rights reserved</p>
      </footer>
    </div>
  );
}