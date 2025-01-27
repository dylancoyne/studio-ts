import { Border } from '@/components/Border'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Container } from './Container'

export function StatList({
  
  children,
  ...props
  
}: Omit<React.ComponentPropsWithoutRef<typeof FadeInStagger>, 'children'> & {
  children: React.ReactNode
}) {
  return ( 
    <div className="rounded-4xl bg-neutral-950 !max-w-none">    
    <FadeInStagger {...props}>
    <FadeIn>
          <h2 className="text-center font-display text-base font-bold tracking-normal sm:text-left">
            KEY METRICS
          </h2>
        </FadeIn>
      <dl className="text-xl mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col lg:grid-cols-none">
        {children}
      </dl>
    </FadeInStagger> 
    </div>
  )
}

export function StatListItem({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <Border as={FadeIn} position="left" className="flex flex-col-reverse pl-8">
      <dt className="mt-2 text-xl">{label}</dt>
      <dd className="font-display text-3xl font-semibold sm:text-4xl">
        {value}
      </dd>
    </Border>
  )
}
