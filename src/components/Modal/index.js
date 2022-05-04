import React from 'react';

import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Input,
  Checkbox,
} from '@chakra-ui/react';

import Typography from '~/components/Typography';
import Button from '~/components/Button';

import { useModal } from '~/context/Modal';
import text from './constants.json';

import * as S from './styles';

function Modal() {
  const { open, setIsOpen } = useModal();

  const onClose = () => setIsOpen(false);

  return (
    <ChakraModal isOpen={open} onClose={onClose} borderRadius="none" autoFocus={false}>
      <ModalOverlay />
      <ModalContent bg="var(--absolute-white)" ml={4} mr={4}>
        <ModalHeader />
        <ModalCloseButton />
        <ModalBody>
          <S.Title>
            <Typography variant="h4-heavy" as="h3" color="primary">{text.title}</Typography>
          </S.Title>

          <S.Form>
            <Input placeholder="Nome" />
            <Input placeholder="E-mail" />

            <div className="submit">
              <Input placeholder="Telefone" />
              <Button ml={2} w="50%" onClick={onClose}>
                Enviar
              </Button>
            </div>

            <Checkbox
              size="md"
              colorScheme="green"
              borderColor="rgba(0,0,0,.1)"
              color="var(--text-dark)"
            >
              Li e concordo com a
              {' '}
              <Button variant="link">política de privacidade</Button>
            </Checkbox>
          </S.Form>
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  );
}

export default Modal;
