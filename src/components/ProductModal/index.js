import React from 'react';
import { PrismicRichText } from '@prismicio/react';

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

      <ModalContent ml={4} mr={4}>
        <S.Background img={product?.image}>
          <ModalHeader />
          <ModalCloseButton />
          <ModalBody>
            <S.Title>
              <Typography variant="h3-heavy" color="primary">
                {product?.name}
              </Typography>
            </S.Title>

            <Typography color="dark" as="div">
              <S.Content>
                <PrismicRichText field={product?.description} />
              </S.Content>
            </Typography>
          </ModalBody>
        </S.Background>
      </ModalContent>

    </ChakraModal>
  );
}

export default ProductModal;
