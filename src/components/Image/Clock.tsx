import * as React from 'react';

const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 490" xmlSpace="preserve" {...props}>
        <path d="M245 0C109.5 0 0 109.5 0 245s109.5 245 245 245 245-109.5 245-245S380.5 0 245 0zm0 449.3c-112.6 0-204.3-91.7-204.3-204.3S132.4 40.7 245 40.7 449.3 132.4 449.3 245 357.6 449.3 245 449.3z" />
        <path d="M290.9 224.1h-25v-95.9c0-11.5-9.4-20.9-20.9-20.9s-20.9 9.4-20.9 20.9V245c0 11.5 9.4 20.9 20.9 20.9h45.9c11.5 0 20.9-9.4 20.9-20.9s-9.5-20.9-20.9-20.9z" />
    </svg>
);

export default SvgComponent;
