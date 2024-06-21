import { css, CSSProp } from 'styled-components';

interface Media {
  desktop: (literals: TemplateStringsArray, ...placeholders: any[]) => CSSProp;
  tablet: (literals: TemplateStringsArray, ...placeholders: any[]) => CSSProp;
  phone: (literals: TemplateStringsArray, ...placeholders: any[]) => CSSProp;
}

const sizes = {
  desktop: 1024,
  tablet: 768,
  phone: 576,
};

const media: Media = {
  desktop: (literals, ...placeholders) => css`
    @media (max-width: ${sizes.desktop}px) {
      ${css(literals, ...placeholders)}
    }
  `,
  tablet: (literals, ...placeholders) => css`
    @media (max-width: ${sizes.tablet}px) {
      ${css(literals, ...placeholders)}
    }
  `,
  phone: (literals, ...placeholders) => css`
    @media (max-width: ${sizes.phone}px) {
      ${css(literals, ...placeholders)}
    }
  `,
};

export default media;