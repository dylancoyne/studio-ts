import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'
import { MDXComponents } from '@/components/MDXComponents'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { formatDate } from '@/lib/formatDate'
import { TagList, TagListItem } from '@/components/TagList'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

export default async function CaseStudyLayout({
  caseStudy,
  children,
}: {
  caseStudy: MDXEntry<CaseStudy>
  children: React.ReactNode
}) {
  let allCaseStudies = await loadCaseStudies()
  let moreCaseStudies = allCaseStudies
    .filter(({ metadata }) => metadata !== caseStudy)
    .slice(0, 2)

  return (
    <>
      <article className="mt-24 sm:mt-32 lg:mt-40">
        <header>
          <PageIntro eyebrow={caseStudy.client} title={caseStudy.title} centered>
            <div className="mt-16 lg:flex lg:items-start lg:align-end">
              <div className="w-full lg:w-2/3 pr-8">{caseStudy.description}</div>
                <div className="w-1/3 border-l border-neutral-400 pl-8">
                  <div className="mt-8 lg:mt-4">
                    <div className="font-bold text-sm text-neutral-950">Date</div>
                      <div className="font-base text-sm text-neutral-950">
                      <time dateTime={caseStudy.date}>
                        {formatDate(caseStudy.date)}
                      </time>
                    </div>
                </div>
                <div className="mt-6">
                  <div className="font-bold text-sm text-neutral-950">Role</div>
                    <div className="mt-1 font-base text-sm text-neutral-950">
                          {caseStudy.service}
                    </div>
                </div>
                {/* <div className="mt-6">
                  Project link to go here
                </div> */}
              </div>
            </div>
          </PageIntro>

          <FadeIn>
            <div className="mt-24 border-t border-neutral-200 bg-white/50 sm:mt-32 lg:mt-40">
              
            </div>

            <div className="border-y border-neutral-200 bg-neutral-100">
              <div className="-my-px mx-auto max-w-[76rem]">
                <GrayscaleTransitionImage
                  {...caseStudy.image}
                  quality={90}
                  className="w-full rounded-none xl:rounded-[88px] xl:py-12 xl:px-12"
                  sizes="(min-width: 1216px) 76rem, 100vw"
                  priority
                />
              </div>
            </div>
          </FadeIn>
        </header>

        <Container className="max-w-full mt-24 sm:mt-32 lg:mt-40">
          <FadeIn>
            <MDXComponents.wrapper>{children}</MDXComponents.wrapper>
          </FadeIn>
        </Container>
      </article>

      {/* {moreCaseStudies.length > 0 && (
        <PageLinks
          className="mt-24 sm:mt-32 lg:mt-40"
          title="Explore more work"
          pages={moreCaseStudies}
        />
      )} */}

      <ContactSection />
    </>
  )
}
