import React from 'react';

import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

import Typography from '~/components/Typography';
import { useModal } from '~/context/ProductModal';
import smile from '~/assets/smile.png';

import * as S from './styles';

function ProductModal() {
  const {
    open,
    product,
    setIsOpen,
  } = useModal();

  const onClose = () => setIsOpen(false);

  return (
    <ChakraModal isOpen={open} onClose={onClose} borderRadius="none" autoFocus={false}>
      <ModalOverlay />
      <ModalContent bg="var(--absolute-white)" pb="var(--spacement-large)" ml={4} mr={4}>
        <ModalHeader />
        <ModalCloseButton />
        <ModalBody>
          <S.Image>
            <img src={smile} alt="" />
          </S.Image>

          <S.Title>
            <Typography variant="h3-heavy" color="dark">
              {product?.name}
            </Typography>
          </S.Title>

          <Typography color="dark">
            {product?.description}
          </Typography>
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  );
}

export default ProductModal;
