export const customMediaQueryWidth = (maxWidth: number): string => {
    return `@media (max-width: ${maxWidth}px)`;
};

interface IDevice {
    desktop: number;
    tablet: number;
    phone: number;
}

export const responsiveWidth: IDevice = {
    desktop: 1200,
    tablet: 768,
    phone: 576,
};

export const widthMedia = {
    desktop: customMediaQueryWidth(responsiveWidth.desktop),
    tablet: customMediaQueryWidth(responsiveWidth.tablet),
    phone: customMediaQueryWidth(responsiveWidth.phone),
};
