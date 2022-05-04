import React, { useState } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';

import Provider from '~/components/Provider';
import Logo from '~/components/Logo';
import Button from '~/components/Button';

import { useModal } from '~/context/Modal';

import { ReactComponent as HamburgerIcon } from '~/assets/icons/hamburger.svg';
import * as S from './styles';

function Header() {
  const { setIsOpen } = useModal();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContactClick = () => {
    setIsOpen(true);
    setIsMenuOpen(false);
  };

  const onClose = () => setIsMenuOpen(false);

  return (
    <>
      <S.Container>
        <Provider>
          <S.Header>
            <div>
              <Logo />
            </div>

            <nav>
              <a href="#quem-somos">
                <Button variant="link">QUEM SOMOS</Button>
              </a>
              <a href="#produtos">
                <Button variant="link">PRODUTOS</Button>
              </a>
              <a href="#vantagens">
                <Button variant="link">VANTAGENS</Button>
              </a>
              <Button variant="link" onClick={handleContactClick}>CONTATO</Button>
            </nav>

            <S.Hamburger>
              <HamburgerIcon onClick={() => setIsMenuOpen(true)} />
            </S.Hamburger>
          </S.Header>
        </Provider>
      </S.Container>

      <Drawer
        isOpen={isMenuOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <S.NavMobile>
              <a href="#quem-somos" onClick={onClose}>
                <Button variant="link">QUEM SOMOS</Button>
              </a>
              <a href="#produtos" onClick={onClose}>
                <Button variant="link">PRODUTOS</Button>
              </a>
              <a href="#vantagens" onClick={onClose}>
                <Button variant="link">VANTAGENS</Button>
              </a>
              <Button variant="link" onClick={handleContactClick}>CONTATO</Button>
            </S.NavMobile>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Header;
