import styled from '@emotion/styled';
import { colors, typographyStyle, type Typography } from '@styles/designSystem';

interface TextProps {
  variant?: Typography;
  color?: string;
}

/**
 * 공통 Text 컴포넌트
 */
const Text = styled.span<TextProps>`
  ${({ variant = 'body1' }) => typographyStyle(variant)};
  ${({ color = colors.text.primary }) => color}
`;

export default Text;
