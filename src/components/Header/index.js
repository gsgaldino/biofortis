import React, { useState } from 'react';
import cc from 'classcat';
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Tooltip,
} from '@chakra-ui/react';

import Provider from '~/components/Provider';
import Logo from '~/components/Logo';
import Button from '~/components/Button';

import { useModal } from '~/context/Modal';

import { ReactComponent as HamburgerIcon } from '~/assets/icons/hamburger.svg';
import { ReactComponent as InstagramIcon } from '~/assets/icons/instagram.svg';
import { ReactComponent as Facebookicon } from '~/assets/icons/facebook.svg';
import { ReactComponent as LinkedinIcon } from '~/assets/icons/linkedin.svg';
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

            <S.Social>
              <div>
                <Tooltip label="instagram" bg="var(--primary-1)" placement="left">
                  <S.Icon className={cc('instagram')}>
                    <InstagramIcon />
                  </S.Icon>
                </Tooltip>
                <Tooltip label="Facebook" bg="var(--primary-1)" placement="left">
                  <S.Icon className={cc('facebook')}>
                    <Facebookicon />
                  </S.Icon>
                </Tooltip>
                <Tooltip label="Linkedin" bg="var(--primary-1)" placement="left">
                  <S.Icon className={cc('linkedin')}>
                    <LinkedinIcon />
                  </S.Icon>
                </Tooltip>
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
            </S.Social>

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
