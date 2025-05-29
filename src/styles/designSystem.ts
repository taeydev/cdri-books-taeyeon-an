import { css } from '@emotion/react';

export const typographyMap = {
  title1: { size: '24px', weight: 700, lineHeight: '24px' },
  title2: { size: '22px', weight: 700, lineHeight: '24px' },
  title3: { size: '18px', weight: 700, lineHeight: '22px' },
  body1: { size: '20px', weight: 500, lineHeight: '20px' },
  body2: { size: '14px', weight: 500, lineHeight: '18px' },
  body2Bold: { size: '14px', weight: 700, lineHeight: '14px' },
  caption: { size: '16px', weight: 500, lineHeight: '16px' },
  captionMedium: { size: '14px', weight: 500, lineHeight: '16px' },
  small: { size: '10px', weight: 500, lineHeight: '10px' },
};

export type Typography = keyof typeof typographyMap;

export const typographyStyle = (variant: Typography) => css`
  font-size: ${typographyMap[variant].size};
  font-weight: ${typographyMap[variant].weight};
  line-height: ${typographyMap[variant].lineHeight};
`;

export const colors = {
  primary: '#4880ee',
  red: '#e84118',
  ui: {
    surface: '#f2f4f6',
    border: '#dadada',
    borderStrong: '#dad6da',
  },
  white: '#ffffff',
  black: '#222222',
  text: {
    primary: '#353c49',
    secondary: '#6d7582',
    tertiary: '#8d94a0',
  },
};

export const buttonColorMap = {
  primary: css`
    background-color: ${colors.primary};
    color: ${colors.white};
    &:hover {
      background-color: #4077e0; // 기존보다 조금 더 어두운 블루
    }
  `,
  secondary: css`
    background-color: ${colors.ui.surface};
    color: ${colors.text.secondary};
    &:hover {
      background-color: #e6e8eb; // surface보다 약간 어두운 회색
    }
  `,
  outline: css`
    background-color: ${colors.white};
    color: ${colors.text.tertiary};
    border: 1px solid ${colors.text.tertiary};
    &:hover {
      background-color: #f7f7f7; // 흰색보다 살짝 회색 느낌
    }
  `,
};

export const buttonSizeMap = {
  small: css`
    font-size: 14px;
    width: 72px;
    height: 35px;
  `,
  medium: css`
    font-size: 16px;
    width: 115px;
    height: 48px;
  `,
  large: css`
    font-size: 18px;
    width: 240px;
    height: 48px;
  `,
};

export type ButtonColor = keyof typeof buttonColorMap;
export type ButtonSize = keyof typeof buttonSizeMap;
