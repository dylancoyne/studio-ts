import clsx from 'clsx'

function Office({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="" invert={invert}>
        Dylan Coyne is an end-to-end
        <br />
        senior product designer, working
        <br />
        with big brands, agencies 
        <br />
        and start-ups.
        </Office>
      </li>
      <li>
        <Office name="" invert={invert}>
        Ribbon Consulting Ltd
        <br />
        trading as Ribbon Creative
        <br />
        VAT number 284570577
        <br />
        Company number 10214322
        </Office>
      </li>
    </ul>
  )
}
