import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import Accordion from '@/components/Accordion'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { TagList, TagListItem } from '@/components/TagList'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoVAALight from '@/images/clients/vaa/logo-light.svg'
import logoVAADark from '@/images/clients/vaa/logo-dark.svg'
import logoVAAColor from '@/images/clients/vaa/logo-color.svg'
import logoSage from '@/images/clients/sage/logo-light.svg'
import logoPenguin from '@/images/clients/penguin/logo-light.svg'
import logoClearleft from '@/images/clients/clear-left/logo-light.svg'
import logoJaguar from '@/images/clients/jaguar/logo-light.svg'
import logoNissan from '@/images/clients/nissan/logo-light.svg'
import logoEdf from '@/images/clients/edf/logo-light.svg'
import logoVhols from '@/images/clients/vhols/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import imageServices from '@/images/search-results.jpg'
import imageHero from '@/images/showreel.gif'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Vaa', logoVAALight],
  ['Sage', logoSage],
  ['Penguin', logoPenguin],
  ['Clear Left', logoClearleft],
  ['Jaguar', logoJaguar],
  ['Nissan', logoNissan],
  ['EDF', logoEdf],
  ['Vhols', logoVhols],
]

const faqs = [
  {
    title: "UX discovery and research",
    text: "Extensive research, in-depth analysis, and careful planning ensures a relevant experience to users across touchpoints.",
    active: false,
  },
  {
    title: "Digital strategy",
    text: "Blending experience, creativity, and a deep understanding of technology to define and improve your digital footprint.",
    active: false,
  },
  {
    title: "Creative concepting & wireframes",
    text: "Embracing creativity, collaboration, and out-of-the-box thinking to deliver impactful and original work.",
    active: false,
  },
  {
    title: "Visual design and UI",
    text: "Defining the core design framework for establishing ideas and how they will be expressed visually.",
    active: false,
  },
  {
    title: "Data analysis and optimisation",
    text: "Analysing data to reveal patterns of behaviour, support decision-making, and inform conclusions.",
    active: false,
  },
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-base font-base font-bold tracking-normal text-neutral-50 sm:text-left">
            CLIENTS
          </h2>
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-24 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client} className="flex justify-center items-center">
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized className="w-full h-full object-contain" />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        eyebrow="PROJECTS"
        title="I work with top UK brands, creating impactful digital experiences"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        A selection of some of my recent projects that educate, engage and inspire audiences through natural interaction
        </p>
        <div className="mt-6">
          <a href="/work" className="inline-flex items-center font-medium text-primary transition hover:text-secondary">View all projects
            <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </div>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl transition hover:bg-neutral-50">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image className="rounded-3xl"
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      unoptimized
                    />
                  </Link>
                </h3>
                <div className='px-4 mb-6'>
                <p className="mt-6 flex gap-x-2 text-neutral-800 text-lg">
                  <span>{caseStudy.client}</span>
                </p>
                <p className="mt-6 font-display tracking-wide text-3xl font-bold text-neutral-950">
                  {caseStudy.title}
                </p>
                <div className="mt-6 font-display text-2xl">
                <TagList className="mt-4">
                  <TagListItem>{caseStudy.service}</TagListItem>
                </TagList>
                </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      
      <Container className="mt-24 sm:mt-32 lg:mt-40">
      
      
        <div className="lg:flex lg:items-start lg:justify-start">
          <div className="lg:w-2/3 lg:min-w-[33rem] lg:pr-12">
          <h2 className="mb-6 block font-display text-base font-bold tracking-normal text-neutral-950">
            CLIENTS
          </h2>
          <span className="block font-display tracking-wide [text-wrap:balance] text-4xl font-bold sm:text-5xl text-neutral-950">Helping you to identify, explore and respond to new opportunities.</span>
        
          <p className='mt-6 text-xl text-neutral-950 lg:pr-4'>
          Over the last 18+ years, I have forged a reputation for creating highly effective digital solutions for top UK brands.
          </p>
        <div className="mt-6 text-xl">
          <a href="/process" className="inline-flex items-center font-medium text-primary transition hover:text-secondary">How I work
            <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </div>
      </div>
    
     
      <div className="mt-8 lg:w-1/3 lg:min-w-[33rem] lg:pl-4">
          
        {faqs.map((faq, index) => (
          
          <Accordion key={index} title={faq.title} id={`faqs-${index}`} active={faq.active}>
            {faq.text}
          </Accordion>
          
        ))}
        
      </div>
          
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'Creative freelance Product Designer based in Sussex. Providing exemplary UX & UI design, Website Design + Development, e-Commerce, Digital Consulting Services.'
}

export default async function Home() {
  // Change (0,1) to display (0,3)
  let caseStudies = (await loadCaseStudies()).slice(0, 2)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-58">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pr-12">
          <h1 className="font-display text-5xl font-bold tracking-wide text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Designing digital experiences with lasting impact
          </h1>
          <p className="mt-6 text-xl text-neutral-950">
            I create user-centered digital experiences that drive brand alignment and innovation, turning business needs and customer insights into engaging UI solutions.
          </p>
          </div>
          <div className="flex justify-center lg:w-1/2 lg:justify-start">
            <FadeIn className="w-[33.75rem] flex-none xl:w-[51rem]">
              <StylizedImage
                src={imageHero}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
        </div>
      </Container>
      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Virgin Atlantic', logo: logoVAAColor, author: 'Mellisa Beckett - Optimisation specialist, Virgin Atlantic'}}
      >
        Many of the optimisation ideas Dylan came up with at Virgin Atlantic Holidays performed well in our A/B tests and have
        since been implemented, and as a company we are now reaping the revenue
        benefits.
      </Testimonial>
      <FadeIn>
        <Services />
      </FadeIn>
      <ContactSection />
    </>
  )
}
