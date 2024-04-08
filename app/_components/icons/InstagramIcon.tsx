import * as React from 'react';
import { SVGProps } from 'react';

const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d='M14 5l2 2m0 0l2-2m-2 2V21M4 10h16'
    />
  </svg>
);

export default InstagramIcon;
