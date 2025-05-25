import { css, type SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import {
  buttonColorMap,
  buttonSizeMap,
  type ButtonColor,
  type ButtonSize,
} from '@styles/designSystem';

interface ButtonProps {
  variant?: ButtonColor;
  size?: ButtonSize;
  full?: boolean;
  disabled?: boolean;
  css?: SerializedStyles;
}

/**
 * 기본 Button 컴포넌트
 */
const Button = styled.button<ButtonProps>(
  {
    cursor: 'pointer',
    border: 'none',
    borderRadius: '8px',
  },
  ({ variant = 'primary' }) => buttonColorMap[variant],
  ({ size = 'medium' }) => buttonSizeMap[size],
  ({ full }) =>
    full
      ? css`
          display: block;
          width: 100%;
        `
      : undefined,
  ({ disabled }) =>
    disabled
      ? css`
          opacity: 0.3;
          cursor: initial;
        `
      : undefined,
  ({ css: customCss }) => customCss
);

export default Button;
