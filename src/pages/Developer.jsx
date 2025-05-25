import { FaGithub } from "react-icons/fa"

export default function Developer() {
  return (
    <div className="w-full px-1 mt-12 mb-8">
      <div className="max-w-6xl mx-auto bg-gray-800 bg-opacity-80 rounded-lg px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-white text-sm sm:text-base backdrop-blur-md shadow-md">
        
        {/* 👤 Profile Info */}
        <div className="flex items-center gap-5">
          <img
            src="https://github.com/anik588.png"
            alt="Sajjad Anik"
            className="rounded-full border-2 border-white"
            style={{ width: '60px', height: '60px' }}
          />
          <p className="leading-snug text-sm sm:text-base text-white">
            Built by <strong>Sajjad Ahmed Anik</strong> —{" "}
            <a
              href="https://github.com/anik588"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-300 hover:text-red-400 underline"
            >
              <FaGithub className="text-lg" />
              GitHub Profile
            </a>
          </p>
        

        </div>
              <div className="mt-6">
        <a
          href="https://sajjad-anik.up.railway.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-white"
        >
          🔗 Visit my website
        </a>
      </div>
        {/* 📊 GitHub Stats */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs sm:text-sm items-center justify-center sm:justify-end text-white">
          <div>⭐ Stars: <span className="font-bold">6</span></div>
          <div>📦 Commits: <span className="font-bold">66</span></div>
          <div>🧠 PRs: <span className="font-bold">1</span></div>
          <div>🐞 Issues: <span className="font-bold">0</span></div>
        </div>
      </div>
    
    </div>
  )
}
