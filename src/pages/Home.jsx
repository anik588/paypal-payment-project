import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="w-full max-w-xl mx-auto bg-opacity-60 rounded-xl shadow-xl p-6 sm:p-10 text-center backdrop-blur-md">
      

      
      <h1 className="text-3xl sm:text-3xl font-bold mb-4 flex justify-center items-center gap-2">
        💰 Paypal Payment Demo Project
      </h1>
      <p className="mb-6 text-sm sm:text-lg">
        Want to integrate payment system in your web app ? <br/>– Starts <strong>$20/hour</strong>
      </p>
          
        <div className="m-6">
          <a
            href="https://sajjad-anik.up.railway.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-white underline underline-offset-4 decoration-indigo-400 hover:decoration-white transition duration-300 ease-in-out"
          >
            🔗 Visit my website to contact
          </a>
        </div>

      <Link
        to="/checkout"
        className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition"
      >
        Proceed to Checkout
      </Link>


    </div>
  )
}
