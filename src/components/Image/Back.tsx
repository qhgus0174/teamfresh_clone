import * as React from 'react';

const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg width={28} height={28} xmlns="http://www.w3.org/2000/svg" {...props}>
        <title>{'ic_fluent_arrow_left_28_filled'}</title>
        <path
            d="M12.298 4.289a1 1 0 0 1 1.406 1.422L6.328 13h17.675a1 1 0 1 1 0 2H6.33l7.374 7.286a1 1 0 0 1-1.406 1.423l-8.927-8.821a1.25 1.25 0 0 1 0-1.778l8.927-8.821Z"
            fill="#212121"
            fillRule="nonzero"
        />
    </svg>
);

export default SvgComponent;
