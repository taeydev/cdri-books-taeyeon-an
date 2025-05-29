import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { colors } from '@styles/designSystem';

const shimmer = keyframes`
  0% {
    background-position: -400px 0;
  }
  100% {
    background-position: 400px 0;
  }
`;

export const SkeletonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  padding: 16px 16px 16px 48px;
  border-bottom: 1px solid ${colors.ui.borderStrong};
`;

export const SkeletonBlock = styled.div<{
  width: string;
  height: string;
  marginRight?: string;
}>`
  background: #e0e0e0;
  border-radius: 4px;
  margin-bottom: 8px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : undefined)};
  animation: ${shimmer} 1.2s infinite linear;
  background-image: linear-gradient(
    to right,
    #e0e0e0 0%,
    #f0f0f0 20%,
    #e0e0e0 40%,
    #e0e0e0 100%
  );
  background-size: 800px 100%;
`;

export const PriceArea = styled.div`
  display: flex;
  width: 20%;
  justify-content: flex-end;
`;

export const ButtonArea = styled.div`
  display: flex;
  flex: 1;
  gap: 8px;
  justify-content: flex-end;
`;
