import * as React from 'react';

const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M497.6 469.1 274.2 22.4c-11.1-19.3-32.3-10.4-36.5 0L13 471.4c-7.7 18 8 30.1 18.3 29.5h449.4c16.1.9 25.8-18.2 16.9-31.8zm-433.3-8.9 191.6-383 191.6 383H64.3z" />
        <path d="M235.5 203.3v125.9c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V203.3c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4z" />
        <circle cx={255.9} cy={401} r={20.5} />
    </svg>
);

export default SvgComponent;
