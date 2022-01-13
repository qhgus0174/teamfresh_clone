import * as React from 'react';

const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg
        className="connect-svg-container"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        {...props}
    >
        <path d="M492.044 106.769c-18.482-21.97-52.604-30.931-117.77-30.931H137.721c-66.657 0-101.358 9.54-119.77 32.93C0 131.572 0 165.174 0 211.681v88.64c0 90.097 21.299 135.842 137.721 135.842h236.554c56.512 0 87.826-7.908 108.085-27.296C503.136 388.985 512 356.522 512 300.321v-88.64c0-49.045-1.389-82.845-19.956-104.912zM328.706 268.238l-107.418 56.14a16.504 16.504 0 0 1-7.65 1.878 16.517 16.517 0 0 1-16.516-16.516V197.82a16.516 16.516 0 0 1 24.128-14.657l107.418 55.778a16.515 16.515 0 0 1 .038 29.297z" />
    </svg>
);

export default SvgComponent;
