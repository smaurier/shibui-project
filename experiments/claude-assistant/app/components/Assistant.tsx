'use client'

import { useState } from 'react'

export default function Assistant() {
  const [input, setInput] = useState('')
  const [reply, setReply] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setReply('')

    const res = await fetch('/api/claude', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    })

    const data = await res.json()
    setReply(data.reply)
    setLoading(false)
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded-lg shadow">
      <h1 className="text-xl font-semibold mb-4">Assistant Famille</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Raconte ta journée..."
          rows={4}
          className="w-full p-2 border rounded mb-4 text-gray-800"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className={`flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${loading ? 'animate-pulse' : 'hover:bg-blue-700'
            }`}
        >
          {loading ? (
            <svg
              className="animate-spin h-5 w-5 text-white mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
          ) : null}
          {loading ? 'Chargement…' : 'Envoyer'}
        </button>
      </form>

      {reply && (
        <div
          className="mt-6 bg-gray-100 text-gray-800 p-4 rounded transition-opacity duration-500 ease-in opacity-0 animate-fadeIn"
          aria-live="polite"
        >
          <strong>Réponse IA :</strong>
          <p className="mt-2 whitespace-pre-wrap text-gray-800">{reply}</p>
        </div>
      )}
    </div>
  )
}
