import React, { useState, useRef } from 'react';

import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Input,
  Checkbox,
  useToast,
} from '@chakra-ui/react';

import Typography from '~/components/Typography';
import Button from '~/components/Button';

import { useModal } from '~/context/Modal';
import text from './constants.json';

import { sendForm } from '~/services/api';

import * as S from './styles';

function Modal() {
  const { open, setIsOpen } = useModal();
  const checkboxRef = useRef();
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const initialState = {
    name: '',
    email: '',
    phone: '',
  };
  const [fields, setFields] = useState(initialState);

  const onChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  const onClose = () => setIsOpen(false);

  const resetForm = () => setFields(initialState);

  const onSubmit = async () => {
    setLoading(true);

    if (!fields.name || !fields.email || !fields.phone) {
      setLoading(false);
      return toast({
        status: 'info',
        title: 'Preencha todos os campos para continuar',
        isClosable: true,
      });
    }

    if (!checkboxRef.current.checked) {
      setLoading(false);
      return toast({
        status: 'info',
        title: 'Você precisa concordar com nossa política de privacidade para continuar.',
        isClosable: true,
      });
    }

    try {
      await sendForm({
        name: fields.name,
        email: fields.email,
        phone: fields.phone,
      });
    } catch (error) {
      console.log('error', error);
      return toast({
        status: 'error',
        title: 'Desculpe, houve um erro em nosso sistema.',
        isClosable: true,
      });
    }

    resetForm();
    setLoading(false);
    return toast({
      status: 'success',
      title: 'Enviado com sucesso!',
      isClosable: true,
    });
  };

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
            <Input placeholder="Nome" onChange={onChange} name="name" />
            <Input placeholder="E-mail" onChange={onChange} name="email" />

            <div className="submit">
              <Input placeholder="Telefone" onChange={onChange} name="phone" />
              <Button ml={2} w="50%" onClick={onSubmit} isLoading={loading}>
                Enviar
              </Button>
            </div>

            <Checkbox
              size="md"
              colorScheme="green"
              borderColor="rgba(0,0,0,.1)"
              color="var(--text-dark)"
              ref={checkboxRef}
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
