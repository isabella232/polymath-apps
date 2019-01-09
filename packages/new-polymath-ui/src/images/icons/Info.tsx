import * as React from 'react';
export const SvgInfo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    fillRule="evenodd"
    height="1em"
    viewBox="0 0 16 16"
    width="1em"
    aria-label="tooltip"
    {...props}
  >
    <path
      fill="currentColor"
      d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 4c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm2 8H6v-1h1V8H6V7h3v4h1v1z"
    />
  </svg>
);
