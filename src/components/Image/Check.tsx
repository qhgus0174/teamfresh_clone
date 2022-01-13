import * as React from 'react';

const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlSpace="preserve" {...props}>
        <path d="M256 0C114.842 0 0 114.842 0 256s114.842 256 256 256 256-114.842 256-256S397.158 0 256 0zm0 478.609c-122.746 0-222.609-99.862-222.609-222.609S133.254 33.391 256 33.391 478.609 133.254 478.609 256 378.746 478.609 256 478.609z" />
        <path d="M374.892 170.498c-19.577-19.577-51.248-19.58-70.827.001l-81.456 81.455-31.369-31.369c-19.528-19.528-51.3-19.528-70.828 0-19.527 19.527-19.527 51.301 0 70.829l66.783 66.783c19.578 19.578 51.248 19.581 70.829 0l116.87-116.87c19.525-19.528 19.525-51.302-.002-70.829zm-23.611 47.218-116.87 116.87c-6.531 6.529-17.076 6.528-23.607 0l-66.783-66.783c-6.508-6.509-6.508-17.097 0-23.607 6.509-6.509 17.097-6.509 23.607 0l54.98 54.98 105.067-105.067c6.509-6.509 17.097-6.509 23.607 0 6.507 6.509 6.507 17.099-.001 23.607z" />
    </svg>
);

export default SvgComponent;