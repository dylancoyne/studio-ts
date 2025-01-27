import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { Testimonial } from '@/components/Testimonial'
import logoVAADark from '@/images/clients/vaa/logo-dark.svg'
import logoVAAColor from '@/images/clients/vaa/logo-color.svg'
import logoSageDark from '@/images/clients/sage/logo-dark.svg'
import logoPenguinDark from '@/images/clients/penguin/logo-dark.svg'
import logoClearleftDark from '@/images/clients/clear-left/logo-dark.svg'
import logoJaguarDark from '@/images/clients/jaguar/logo-dark.svg'
import logoNissanDark from '@/images/clients/nissan/logo-dark.svg'
import logoEdfDark from '@/images/clients/edf/logo-dark.svg'
import logoVholsDark from '@/images/clients/vhols/logo-dark.svg'
import { formatDate } from '@/lib/formatDate'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import { TagList, TagListItem } from '@/components/TagList'


function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <Container className="mt-40">
      
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {caseStudies.map((caseStudy) => (
          <FadeIn key={caseStudy.client}>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                  <div className="col-span-full sm:col-span-full lg:col-span-1 w-full">
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.title}
                      className="w-full h-auto rounded-3xl"
                      unoptimized
                    />
                  </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <h3 className="mt-6 flex gap-x-2 text-neutral-800 text-lg">
                        {caseStudy.client}
                      </h3>
                    <p className="mt-2 font-display text-4xl font-bold text-neutral-950">
                      <Link href={caseStudy.href}>{caseStudy.title}</Link>
                    </p>
                    <div className="mt-6 space-y-6 text-base text-neutral-950">
                    
                      {caseStudy.summary.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    <div className="mt-12 inline-block">
                      <p className="text-xs text-primary">
                      <time dateTime={caseStudy.date}>
                            {formatDate(caseStudy.date)}
                          </time>
                          </p>
                      <Link className="inline-flex items-center font-medium text-xl text-primary transition hover:text-secondary" href={caseStudy.href}aria-label={`Read case study: ${caseStudy.client}`}>Read case study
                      <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg></Link>
                    
                    </div>
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

const clients = [
  ['Vaa', logoVAADark],
  ['Sage', logoSageDark],
  ['Penguin', logoPenguinDark],
  ['Clear Left', logoClearleftDark],
  ['Jaguar', logoJaguarDark],
  ['Nissan', logoNissanDark],
  ['EDF', logoEdfDark],
  ['Vhols', logoVholsDark],
]

function Clients() {
  return (
    
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
      <h2 className="font-display text-base font-bold tracking-normal text-neutral-950">
            CLIENTS
          </h2>
      </FadeIn>
      <FadeInStagger className="mt-10" faster>
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4"
        >
          {clients.map(([client, logo]) => (
            <li key={client} className="flex justify-center items-center">
              <FadeIn className="overflow-hidden">
                
                  <Image src={logo} alt={client} unoptimized className="w-full h-full object-contain" />
                
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Work',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default async function Work() {
  // change (0, 1) to display number of case studies
  let caseStudies = (await loadCaseStudies()).slice(0, 1)

  return (
    <>
      <PageIntro
        eyebrow="PROJECTS"
        title="Problem solving is at the heart of what I do"
      >
        <p>
          A selection of some of my recent projects that educate, engage and inpsire audiences through natural interaction. More case studies coming soon.
        </p>
      </PageIntro>

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Mail Smirk', logo: logoVAAColor, author: 'Jamie Harrington - Senior Product Lead, Virgin Atlantic' }}
      >
         I worked with Dylan across 2 years at Virgin Atlantic and his UX and design skills really helped deliver great features for us.
      </Testimonial>

      <Clients />

      <ContactSection />
    </>
  )
}
