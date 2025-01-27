import clsx from 'clsx'

'use client'

import { useState, useEffect } from 'react'

type AccordionpProps = {
  children: React.ReactNode
  title: string
  id: string,
  active?: boolean
}

export default function Accordion({
  children,
  title,
  id,
  active = false
}: AccordionpProps) {

  const [accordionOpen, setAccordionOpen] = useState<boolean>(false)

  

  

  return (
    <div className="py-4">
      <h6 className="text-2xl font-semibold">
        <button
          className="flex items-center justify-between w-full text-left font-semibold py-2"
          onClick={(e) => { e.preventDefault(); setAccordionOpen(!accordionOpen); }}
          aria-expanded={accordionOpen}
          aria-controls={`accordion-text-${id}`}
        >
          <span>{title}</span>
          <svg className="fill-primary shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <rect stroke="#22A355" stroke-width="1" y="7" width="16" height="2" rx="3" className={`transform origin-center transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`} />
            <rect stroke="#22A355" stroke-width="1" y="7" width="16" height="2" rx="3" className={`fill-tertiary transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`} />
          </svg>
        </button>
      </h6>
      <div
        id={`accordion-text-${id}`}
        role="region"
        aria-labelledby={`accordion-title-${id}`}
        className={`grid text-md text-neutral-950 overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="pb-3">
            {children}
          </p>
        </div>
      </div>
    </div>

    
  )
}
