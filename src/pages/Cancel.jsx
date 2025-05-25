import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Cancel() {
  const navigate = useNavigate()
  const [countdown, setCountdown] = useState(3)

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1)
    }, 1000)

    const timeout = setTimeout(() => {
      navigate('/')
    }, 3000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [navigate])

  return (
    <div className="text-center bg-black bg-opacity-50 p-8 rounded-xl shadow-lg max-w-xl w-full">
      <h1 className="text-3xl font-bold text-red-500 mb-4">❌ Payment Cancelled</h1>
      <p className="mb-4">You will be redirected to the homepage in <span className="font-bold">{countdown}</span> second{countdown !== 1 ? 's' : ''}.</p>
      <Link
        to="/"
        className="mt-2 inline-block bg-white text-black px-5 py-2 rounded-full hover:bg-gray-200 transition"
      >
        ⬅️ Go to Home Now
      </Link>
    </div>
  )
}
