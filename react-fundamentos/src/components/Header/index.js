import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../Button';

import { ThemeContext } from '../../context/ThemeContext';

const Title = styled.h1`
  color: #637bf3
`;

//CSS Modules - CSS que não interfere no restante do código
//Ele cria uma hash para não gerar conflito de nomes de classes

export default function Header({ title, children }) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Title>{title}</Title>
      <Button
        onClick={onToggleTheme}>
        Mudar tema
      </Button>
      {children}
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

//mostra sempre como padrão, caso não seja informado nada
Header.defaultProps = {
  title: `JStack's Blog`
};