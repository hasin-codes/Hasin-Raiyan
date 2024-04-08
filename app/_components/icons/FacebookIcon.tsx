import * as React from 'react';
import { SVGProps } from 'react';

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    {...props}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M18 6a2 2 0 100-4h-3V1m-4 0H8a2 2 0 00-2 2v16a2 2 0 002 2h5v-6h-2V9h2V7a4 4 0 014-4z'
    />
  </svg>
);

export default FacebookIcon;
