'use client'
import { useId } from 'react'
import { type Metadata } from 'next'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import { useForm, ValidationError } from '@formspree/react';

function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function RadioInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

function ContactForm() {
  const [state, handleSubmit] = useForm("mvggyqao");
  if (state.succeeded) {
      return (
        <FadeIn className="lg:order-last">
<h2 className="text-primary font-display text-base font-semibold text-neutral-950">Thanks for getting in touch!</h2>
</FadeIn>

      ) 
  }
  return (
    <FadeIn className="lg:order-last">
    <form onSubmit={handleSubmit}>
      <h2 className="font-display text-base font-semibold text-neutral-950">
          Work enquiries
        </h2>

        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name"/>
          <TextInput
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
          <TextInput
          label="Company"
          name="company"
          autoComplete="organization"
          />
          <ValidationError 
            prefix="Company" 
            field="company"
            errors={state.errors}
          />
          <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" id="FormControlPhone"/>
          <ValidationError 
            prefix="Phone" 
            field="phone"
            errors={state.errors}
          />
          <TextInput label="Message" name="message" id="FormControlTextarea"/>
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
                   {/* <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
                       <fieldset>
                        <legend className="text-base/6 text-neutral-500">Budget</legend>
                       <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                           <RadioInput label="$25K – $50K" name="budget" value="25" />
                         <RadioInput label="$50K – $100K" name="budget" value="50" />
                          <RadioInput label="$100K – $150K" name="budget" value="100" />
                          <RadioInput label="More than $150K" name="budget" value="150" />
                         </div>
                       </fieldset>
                   </div> */}
        </div>

      <Button className="mt-10"type="submit" disabled={state.submitting}>
        Submit
      </Button>

    </form>
    </FadeIn>
  );
}





function ContactDetails() {
  return (
    <FadeIn>
      
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Follow me
        </h2>
        <SocialMedia className="mt-6" />
        <Border className="mt-16 pt-16">
      
      <h2 className="font-display text-base font-semibold text-neutral-950">
      Profile
      </h2>
      <Offices className="mt-0 grid grid-cols-1 gap-8 sm:grid-cols-2" />
      </Border>
      
    </FadeIn>
  )
}

// export const metadata: Metadata = {
//   title: 'Contact Me',
//    description: 'Let&#39;s work together. We can&#39;t wait to hear from you.',
// }

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="CONTACT" title="Let's chat...">
        <p className="max-w-xl">I&#39;d love to hear about your project, ideas, or anything else you&#39;d like to discuss. Feel free to get in touch and I will get back to you as soon as possible.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
