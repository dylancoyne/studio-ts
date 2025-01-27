import clsx from 'clsx'

type BorderProps<T extends React.ElementType> = {
  as?: T
  className?: string
  position?: 'top' | 'left'
  invert?: boolean
}

export function Border<T extends React.ElementType = 'div'>({
  as,
  className,
  position = 'top',
  invert = false,
  ...props
}: Omit<React.ComponentPropsWithoutRef<T>, keyof BorderProps<T>> &
  BorderProps<T>) {
  let Component = as ?? 'div'

  return (
    <Component
      className={clsx(
        className,
        'relative before:absolute',
        invert
          ? 'before:bg-white'
          : 'before:bg-neutral-950',
        position === 'top' &&
          'before:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-full',
        position === 'left' &&
          'before:left-0 before:top-0 before:h-full before:w-px',
      )}
      {...props}
    />
  )
}
