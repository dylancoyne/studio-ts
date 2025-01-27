import { type Metadata } from 'next'
import Image from 'next/image'
import React from 'react';

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { loadArticles } from '@/lib/mdx'
import { TagList, TagListItem } from '@/components/TagList'
import imageBio from '@/images/dylan-coyne.jpg'
import imageTesting from '@/images/user-testing.jpg'
import { StylizedImage } from '@/components/StylizedImage'
import PdfViewer from '@/components/PdfViewer'



function Story() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 lg:flex lg:items-start lg:justify-end gap-16">
        <div className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem]">
        <FadeInStagger>
        <FadeIn>
              <h2>
                <span className="mb-6 block font-display text-base font-bold tracking-normal text-white">MY STORY</span>
                <span className="block font-display tracking-wide [text-wrap:balance] text-4xl font-medium sm:text-5xl text-white">Passionate about creating impactful digital experiences
                  </span>
                  </h2>
                  <div className="mt-6 text-xl text-neutral-300">
                    <p>I began my career straight out of university as a digital designer for a medical multi-company, creating interfaces for CD-ROMs. Since then, I’ve seen the digital design field evolve dramatically!
                    </p>
                    <p className="mt-10">In recent years, I’ve had the privilege of working as a product designer with major brands like Penguin, Nissan, EDF, and Virgin, applying my expertise in UX/UI to deliver impactful, user-centered solutions.
                      </p>
                      </div>
                      </FadeIn>   
                      </FadeInStagger> 
        </div>
        
        <div className="flex justify-center lg:w-1/2 lg:justify-start lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageTesting}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
                
          </div>
      
    </div>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'Explore our comprehensive digital services tailored to enhance your online presence. From web design and development to eCommerce and UX/UI design.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="ABOUT" title="My strength is in my collaboration">
        <p>
        With over 18 years of experience in digital design, I’ve learned that effective 
        planning, strategic insight, and strong collaboration are critical to the success of any project.
        </p>
       <PdfViewer /> 
      </PageIntro>
      <Story />
      <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="[&>*]:mx-auto [&>*]:max-w-3xl [&>:first-child]:!mt-0 [&>:last-child]:!mb-0">
        <div className="typography">
        <h2>Key Skills</h2>
          <p className="max-w-5xl text-xl">
            My passion for digital design is helped by a rather large chunk of 
            skills in Figma, Figjam, Miro, Mural, Sketch, Adobe Creative Suite,
            HTML, HTML5, CSS. 
          </p>
          <p>The services I can provide include:</p>
        </div>
        <TagList
         className="max-w-5xl"
        >
            <TagListItem>UX discovery</TagListItem>
            <TagListItem>UX research</TagListItem>
            <TagListItem>Content architecture</TagListItem>
            <TagListItem>Wireframes & Prototyping</TagListItem>
            <TagListItem>User testing</TagListItem>
            <TagListItem>Creative concepting</TagListItem>
            <TagListItem>Visual design & UI</TagListItem>
            <TagListItem>Data analysis & optimisation</TagListItem>
            <TagListItem>Design system</TagListItem>
            <TagListItem>Digital strategy</TagListItem>
          </TagList>
          
        <div className="my-24 mx-auto max-w-7xl !max-w-none lg:flex lg:items-center lg:justify-center gap-16">
          <div className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem]">
                <FadeIn className="w-full flex-none grayscale">
                  <Image className="rounded-3xl"
                          src={imageBio}
                          alt={"Dylan Coyne"}
                          unoptimized
                        />
                </FadeIn>
          </div>
          
            <FadeInStagger>
              <FadeIn>
                <div className="mt-6 text-xl py-24">
                  <p>I have always enjoyed using my imagination to be as creative 
                    as I can be to solve problems and find solutions. Be it a tricky 
                    UX customer journey or a complicated UI layout, I approach 
                    challenges with determination, persistence and critical thinking.
                  </p>
                  <PdfViewer /> 
                </div>
              </FadeIn>   
            </FadeInStagger> 
          </div>     
       </div>
      </Container>

      {/* <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="Some design thinking"
        intro="Over the years I have been lucky to work on varied and exciting digital design projects."
        pages={blogArticles}
      /> */}

      <ContactSection />
    </>
  )
}
