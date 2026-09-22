'use client'

import { Suspense, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import { FadeIn } from '@/components/FadeIn'
import { Button } from '@/components/Button'

function PasswordForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/verify-case-study', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      if (res.ok) {
        router.push(searchParams.get('redirect') || '/work')
        router.refresh()
      } else {
        setError('Incorrect password')
        setLoading(false)
      }
    } catch (err) {
      console.error(err)
      setError('Something went wrong')
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 flex max-w-sm flex-col gap-4">
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        autoFocus
        className="rounded-lg border border-neutral-300 px-4 py-3 text-base text-neutral-950 focus:border-neutral-950 focus:outline-none"
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
      <Button type="submit" disabled={loading} className="self-start">
        {loading ? 'Checking' : 'Unlock'}
      </Button>
    </form>
  )
}

export default function WorkLockedPage() {
  return (
    <FadeIn>
      <div className="mx-auto mt-24 max-w-7xl px-6 text-left sm:mt-32 lg:mt-40 lg:max-w-3xl lg:px-8">
        <p className="font-display text-base font-semibold text-neutral-950">
          Private case study
        </p>
        <h1 className="mt-6 font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
          This project is password protected
        </h1>
        <p className="mt-6 text-xl text-neutral-600">
          Enter the password to view this case study.
        </p>

        <Suspense fallback={null}>
          <PasswordForm />
        </Suspense>
      </div>
    </FadeIn>
  )
}