import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M4 12h15" />
      <path d="m14 6 6 6-6 6" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 3H3.55C3.25 3 3 3.25 3 3.55v16.9c0 .3.25.55.55.55h16.9c.3 0 .55-.25.55-.55V3.55c0-.3-.25-.55-.55-.55ZM8.35 18.3H5.7V9.75h2.65v8.55ZM7.02 8.58a1.54 1.54 0 1 1 0-3.08 1.54 1.54 0 0 1 0 3.08Zm11.3 9.72h-2.64v-4.16c0-.99-.02-2.26-1.38-2.26-1.38 0-1.6 1.08-1.6 2.19v4.23h-2.64V9.75h2.54v1.17h.04c.35-.67 1.22-1.38 2.5-1.38 2.67 0 3.17 1.76 3.17 4.05v4.71Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function LayerIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="m12 3 8.5 4.8L12 12.6 3.5 7.8 12 3Z" />
      <path d="m3.5 12 8.5 4.8 8.5-4.8" />
      <path d="m3.5 16.2 8.5 4.8 8.5-4.8" />
    </svg>
  );
}

export function CopyIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="8" y="8" width="11" height="11" rx="1.5" />
      <path d="M16 8V5.7A1.7 1.7 0 0 0 14.3 4H5.7A1.7 1.7 0 0 0 4 5.7v8.6A1.7 1.7 0 0 0 5.7 16H8" />
    </svg>
  );
}
