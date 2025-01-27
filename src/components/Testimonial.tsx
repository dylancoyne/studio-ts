import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridPattern } from '@/components/GridPattern'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'






export function Testimonial({
  children,
  client,
  className,
}: {
  children: React.ReactNode
  client: { logo: ImageProps['src']; name: string; author: string}
  className?: string
}) {

 
  return (
    <div
      className={clsx(
        'relative rounded-4xl isolate bg-neutral-50 py-16 sm:py-28 md:py-32',
        className,
      )}
    >
      <Container>
        <FadeIn>
          <figure className="mx-auto max-w-4xl">
            <blockquote className="relative font-display font-semibold tracking-wider text-neutral-950">
            <svg width="23" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.858 2.906C7.048.752 4.694-.424 2.6.28.506.984-.535 3.3.275 5.454l1.837 4.886c.81 2.154 3.164 3.33 5.258 2.626 2.094-.704 3.135-3.02 2.325-5.174L7.858 2.906ZM20.212 2.906C19.402.752 17.048-.424 14.954.28c-2.095.704-3.136 3.02-2.325 5.174l1.837 4.886c.81 2.154 3.164 3.33 5.258 2.626 2.094-.704 3.135-3.02 2.325-5.174l-1.837-4.886Z" fill="#20789D"/></svg>
              <p className="py-4 px-8 text-3xl md:text-4xl">
                {children}
              </p>
            </blockquote>
            <figcaption className="text-sm md:text-xl px-8">
              {/* <Image src={client.logo} alt={client.name} unoptimized />  */}
              {client.author}
            </figcaption>
            
          </figure>
        </FadeIn>
       
      </Container>
    </div>
  )
}
