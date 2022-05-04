import React from 'react';

import Provider from '../Provider';
import Typography from '../Typography';

import logoLight from '~/assets/logo-light.png';
import mapMark from '~/assets/icons/map-mark.svg';

import * as S from './styles';

function Footer() {
  const links = [
    {
      text: 'Política de privacidade',
      href: '#politica-de-privacidade',
    },
    {
      text: 'Quem somos',
      href: '#quem-somos',
    },
    {
      text: 'Produtos',
      href: '#produtos',
    },
    {
      text: 'Vantagens',
      href: '#vantagens',
    },
  ];

  return (
    <S.Footer>
      <Provider>

        <S.Flex>
          <div>
            <img src={logoLight} alt="Biofortis logotipo branco" />
            <nav>
              <ul>
                {links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>
                      <Typography color="light">
                        {link.text}
                      </Typography>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <S.Address>
              <img src={mapMark} alt="ícone marcação de mapa" />
              <Typography color="light">
                Matriz: Rua Gabriel Prestes, 75 - Santana, São Paulo - SP
              </Typography>
            </S.Address>
            <Typography color="light">CNPJ/MF: 38.947.929/0001-03</Typography>
          </div>
        </S.Flex>

      </Provider>
    </S.Footer>
  );
}

export default Footer;
