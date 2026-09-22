import Link from 'next/link'
import clsx from 'clsx'

function LinkedinIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.2234 0.076416H1.77187C0.792187 0.076416 0 0.849854 0 1.80611V22.342C0 23.2983 0.792187 24.0764 1.77187 24.0764H22.2234C23.2031 24.0764 24 23.2983 24 22.3467V1.80611C24 0.849854 23.2031 0.076416 22.2234 0.076416ZM7.12031 20.528H3.55781V9.07173H7.12031V20.528ZM5.33906 7.5108C4.19531 7.5108 3.27188 6.58736 3.27188 5.44829C3.27188 4.30923 4.19531 3.38579 5.33906 3.38579C6.47813 3.38579 7.40156 4.30923 7.40156 5.44829C7.40156 6.58267 6.47813 7.5108 5.33906 7.5108ZM20.4516 20.528H16.8937V14.9592C16.8937 13.6326 16.8703 11.9217 15.0422 11.9217C13.1906 11.9217 12.9094 13.3701 12.9094 14.8655V20.528H9.35625V9.07173H12.7687V10.6373H12.8156C13.2891 9.73736 14.4516 8.7858 16.1813 8.7858C19.7859 8.7858 20.4516 11.1577 20.4516 14.242V20.528Z"
      />
    </svg>
  )
}

function GithubIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0.0764160C5.3724 0.0764160 0 5.44881 0 12.0764C0 17.3712 3.438 21.8572 8.2068 23.4448C8.8068 23.5564 9.0252 23.1856 9.0252 22.8676C9.0252 22.5832 9.0156 21.8296 9.0096 20.8324C5.6724 21.5572 4.9668 19.2244 4.9668 19.2244C4.4208 17.8336 3.6324 17.4628 3.6324 17.4628C2.5452 16.7176 3.7164 16.7320 3.7164 16.7320C4.9212 16.8172 5.556 17.9704 5.556 17.9704C6.6252 19.7992 8.364 19.2712 9.0432 18.9640C9.1524 18.1888 9.4632 17.6620 9.8064 17.3632C7.146 17.0608 4.344 16.0288 4.344 11.4136C4.344 10.1008 4.812 9.0256 5.58 8.1808C5.4552 7.8784 5.0448 6.6544 5.6976 4.9984C5.6976 4.9984 6.7068 4.6756 8.9964 6.2224C9.9528 5.9584 10.98 5.8264 12 5.8216C13.02 5.8264 14.0484 5.9584 15.0072 6.2224C17.2944 4.6756 18.3012 4.9984 18.3012 4.9984C18.9552 6.6544 18.5448 7.8784 18.42 8.1808C19.1892 9.0256 19.6548 10.1008 19.6548 11.4136C19.6548 16.0408 16.848 17.0572 14.1792 17.3536C14.6104 17.7244 14.9952 18.4576 14.9952 19.5808C14.9952 21.1912 14.9808 22.4776 14.9808 22.8676C14.9808 23.1880 15.198 23.5624 15.8076 23.4436C20.5644 21.8536 24 17.3692 24 12.0764C24 5.44881 18.6276 0.0764160 12 0.0764160Z"
      />
    </svg>
  )
}

function StravaIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 0.076416C0.895431 0.076416 0 0.971846 0 2.07642V22.0764C0 23.181 0.89543 24.0764 2 24.0764H22C23.1046 24.0764 24 23.181 24 22.0764V2.07642C24 0.971847 23.1046 0.076416 22 0.076416H2ZM12.9735 13.4474L14.5403 16.5344L16.1033 13.4474H18.4028L14.5403 21.0764L10.6748 13.4474H12.9735ZM12.9743 13.4467L10.8473 9.24817L8.72401 13.4474H5.59726L10.8473 3.07642L16.1033 13.4467H12.9743Z"
      />
    </svg>
  )
}

export const socialMediaProfiles = [
  { title: 'Linkedin', href: 'https://www.linkedin.com/in/dylancoyne/', icon: LinkedinIcon },
  { title: 'Github', href: 'https://github.com/dylancoyne', icon: GithubIcon },,
  { title: 'Strava', href: 'https://www.strava.com/athletes/3766939', icon: StravaIcon },
]

export function SocialMedia({
  className,
  invert = false,
}: {
  className?: string
  invert?: boolean
}) {
  return (
    <ul
      role="list"
      className={clsx(
        'flex gap-x-10',
        invert ? 'text-white' : 'text-neutral-950',
        className,
      )}
    >
      {socialMediaProfiles.map((socialMediaProfile) => (
        <li key={socialMediaProfile.title}>
          <Link
            href={socialMediaProfile.href}
            aria-label={socialMediaProfile.title}
            className={clsx(
              'transition',
              invert ? 'hover:text-neutral-200' : 'hover:text-neutral-700',
            )}
          >
            <socialMediaProfile.icon className="h-8 w-8 fill-current" />
          </Link>
        </li>
      ))}
    </ul>
  )
}
