import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="w-full max-w-xl mx-auto bg-opacity-60 rounded-xl shadow-xl p-6 sm:p-10 text-center backdrop-blur-md">
      

      
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 flex justify-center items-center gap-2">
        💰 Paypal Payment demo Project
      </h1>
      <p className="mb-6 text-sm sm:text-lg">
        Professional React Portfolio Template – only <strong>$20</strong>
      </p>

      <Link
        to="/checkout"
        className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition"
      >
        Proceed to Checkout
      </Link>


    </div>
  )
}
