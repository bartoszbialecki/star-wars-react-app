import React, { FC } from 'react';
import { StyledModalBox } from './ModalBox.styled';
import { StyledModalCloseButton } from './ModalCloseButton';
import { StyledModalContent } from './ModalContent.styled';
import { StyledModalOverlay } from './ModalOverlay.styled';

type ModalProps = {
    isOpen: boolean
    onClose: () => void
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {

    return (
        <>
        <StyledModalOverlay isOpen={isOpen}>
          <StyledModalBox>
            <StyledModalCloseButton onClick={onClose}>
              &times;
            </StyledModalCloseButton>
            <StyledModalContent>
              {children}
            </StyledModalContent>
          </StyledModalBox>
        </StyledModalOverlay>
      </>
    )
}

export default Modal