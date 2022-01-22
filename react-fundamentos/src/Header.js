import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

import { ThemeContext } from './ThemeContext';

export default function Header({ title, children }) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <>
      <h1 >{title}</h1>
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