import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageTesting from '@/images/interviews.jpg'
import imageSketches from '@/images/sketches.jpg'
import imageIdeas from '@/images/ideas.jpg'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none xl:w-[51rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-end lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 after:text-neutral-950]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-normal text-neutral-950">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Discovery" image={{ src: imageTesting, shape: 2 }}>
      <div className="space-y-6 text-xl text-neutral-600">
        <p>
          Kicking off a new project is as much about communicating with 
          the client and understanding their goals and product strategy, 
          as it is their customers needs. I am always keen to identify the 
          opportunities for a client's new product. Every project is 
          different but this can include organising a workshop, inviting 
          key business stakeholders, creating a UX canvas to outline the 
          project and creating a journey map to prioritise key 
          deliverables and timings.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Stakeholder interviews</TagListItem>
        <TagListItem>Journey mapping</TagListItem>
        <TagListItem>Workshop facilitation</TagListItem>
        <TagListItem>Product canvas</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Research" image={{ src: imageIdeas, shape: 1 }}>
      <div className="space-y-6 text-xl text-neutral-600">
        <p>
        Competitive benchmarking, customer analysis through creation of personas 
        are just some of the ways to research the market and customer needs. 
        Concepting and user experience form part of the design phase.
        </p>
        <p>
        According to the scale of the project, this can involve conducting user testing,
        customer journey mapping, wireframes, early sketches and designs, prototyping and testing.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Competitor benchmarking</TagListItem>
        <TagListItem>Personas</TagListItem>
        <TagListItem>User testing</TagListItem>
        <TagListItem>Prototyping</TagListItem>
        <TagListItem>Wireframes</TagListItem>
      </TagList>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Deliver" image={{ src: imageSketches, shape: 0 }}>
      <div className="space-y-6 text-xl text-neutral-600">
        <p>
        On then to the visual design where I create branding, visuals aesthetics, 
        user interfaces, key layouts, colour palette and initial style guide direction. 
        From here, hi-fidelity prototypes, site architecture and general functionality of the product can be created. 
        </p>
        <p>
        Then, I team up with others to build a product that solves real problems.
        </p>
        <p>
        Even after the product is launched, my work isn’t done —  I often loop back 
        to earlier stages as new insights emerge, whether through testing or user feedback.
        </p>
        
      </div>
    </Section>
  )
}

export const metadata: Metadata = {
  title: 'Process',
  description:
    'We can design and develop any type of website you require, Tailwind, Wordpress, Bootstrap, just tell us your requirements and we can build the website you need.'
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="PROCESS" title="How I work">
        {
        <p>
          Each project is unique, but my approach remains consistent: I focus on understanding the core business challenge, empathize with user pain points, generate creative solutions, test and iterate on those ideas, and refine them until they effectively meet both user needs and business goals.
        </p>
        }
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>
      <ContactSection />
    </>
  )
}
