import { useId } from 'react'
import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'

const shapes = [
  {
    width: 878,
    height: 611,
    path: 'M494.74 115.207c-22.426-63.085-97.625-93.956-167.961-68.951-70.336 25.004-109.174 96.414-86.748 159.499l103.014 289.777c22.426 63.085 97.625 93.956 167.961 68.952 70.336-25.004 109.174-96.415 86.748-159.499L494.74 115.207ZM244.492 302.796c-20.379-57.325-83.37-87.276-140.696-66.897-57.325 20.379-87.276 83.37-66.897 140.695l46.23 130.044c20.379 57.325 83.37 87.276 140.695 66.898 57.325-20.379 87.276-83.371 66.898-140.696l-46.23-130.044ZM786.739 192.183c-22.172-62.37-86.617-96.41-143.943-76.032-57.325 20.379-85.822 87.46-63.65 149.83l50.298 141.487c22.172 62.37 86.618 96.411 143.943 76.032 57.325-20.379 85.822-87.46 63.65-149.83l-50.298-141.487Z',
  },
  {
    width: 679,
    height: 609,
    path: 'M295.74 114.225C273.314 51.14 198.115 20.27 127.779 45.274 57.443 70.278 18.605 141.688 41.031 204.773L144.045 494.55c22.426 63.085 97.625 93.956 167.961 68.952 70.336-25.004 109.174-96.414 86.748-159.499L295.74 114.225ZM587.739 191.201c-22.172-62.37-86.617-96.41-143.943-76.032-57.325 20.379-85.822 87.46-63.65 149.83l50.298 141.488c22.172 62.37 86.618 96.41 143.943 76.031 57.325-20.379 85.822-87.459 63.65-149.829l-50.298-141.488Z',
  },
  {
    width: 576,
    height: 770,
    path: 'M561.597 321.077C606.438 194.94 543.111 57.252 420.153 13.541 297.196-30.169 161.168 36.65 116.327 162.786L14.605 448.929c-44.84 126.137 18.486 263.825 141.444 307.536 122.958 43.71 258.985-23.109 303.826-149.245l101.722-286.143Z',
  }
]

type ImagePropsWithOptionalAlt = Omit<ImageProps, 'alt'> & { alt?: string }

export function StylizedImage({
  shape = 0,
  className,
  ...props
}: ImagePropsWithOptionalAlt & { shape?: 0 | 1 | 2 }) {
  let id = useId()
  let { width, height, path } = shapes[shape]

  return (
    <div
      className={clsx(
        className,
        'relative flex aspect-[1200/900] w-full',
      )}
    >
      <svg viewBox={`0 0 ${width} ${height}`} fill="none" className="h-full">
        <g clipPath={`url(#${id}-clip)`} className="group">
          <g className="origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105">
            <foreignObject width={width} height={height}>
              <Image
                alt=""
                className="w-full bg-neutral-100 object-cover"
                style={{ aspectRatio: `${width} / ${height}` }}
                {...props}
              />
            </foreignObject>
          </g>
          <use
            href={`#${id}-shape`}
            strokeWidth="2"
            className="stroke-neutral-950/10"
          />
        </g>
        <defs>
          <clipPath id={`${id}-clip`}>
            <path
              id={`${id}-shape`}
              d={path}
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}
