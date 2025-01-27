import clsx from 'clsx'

import { Border } from '@/components/Border'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

export function List({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <FadeInStagger>
      <ul role="list" className={clsx('text-base text-neutral-600', className)}>
        {children}
      </ul>
    </FadeInStagger>
  )
}

export function ListItem({
  children,
  title,
}: {
  children: React.ReactNode
  title?: string
}) {
  return (
    <li className="group mt-4 first:mt-0">
      <FadeIn>
        <Border className="pt-8 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
          {title && (
            <h3 className="font-regular text-2xl tracking-tight text-neutral-950">{`${title} `}</h3>
          )}
          {children}
        </Border>
      </FadeIn>
    </li>
  )
}
