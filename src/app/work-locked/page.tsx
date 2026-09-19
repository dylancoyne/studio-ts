'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'

export default function WorkLockedPage() {
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

    if (!res.ok) {
      setError('Incorrect password')
      setLoading(false)
      return
    }

    const redirectTo = searchParams.get('redirect') || '/work'

    router.push(redirectTo)
  } catch (err) {
    console.error(err)
    setError('Something went wrong')
    setLoading(false)
  }
}

  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <Border position="left" className="mx-auto max-w-xl pl-8">
          <h1 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
            This case study is private
          </h1>
          <p className="mt-4 text-base text-neutral-600">
            Enter the password to view this project.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
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
        </Border>
      </FadeIn>
    </Container>
  )
}