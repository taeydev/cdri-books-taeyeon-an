import styled from '@emotion/styled';
import { colors, typographyStyle } from '@styles/designSystem';

export const Modal = styled.div`
  position: absolute;
  top: calc(100% + 15px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  border-radius: 8px;
  background-color: ${colors.white};
  width: 360px;
  height: 160px;
  box-shadow: 0px 4px 14px 6px rgba(151, 151, 151, 0.15);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 36px;
  padding-right: 8px;
`;

export const ModalContent = styled.div`
  padding: 0 24px;
`;

export const FilterWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 36px;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${colors.primary};
  flex: 1;
  margin-left: 11px;
  padding: 5px 9.45px;
  color: ${colors.text.primary};
  ${typographyStyle('captionMedium')};
  &::placeholder {
    ${typographyStyle('captionMedium')};
    color: ${colors.text.tertiary};
  }
  &:focus {
    outline: none;
  }
`;
