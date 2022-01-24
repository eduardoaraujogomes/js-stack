import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';


import styles from './Header.scss';

import { ThemeContext } from './ThemeContext';

//CSS Modules - CSS que não interfere no restante do código
//Ele cria uma hash para não gerar conflito de nomes de classes

export default function Header({ title, children }) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      <Button
        onClick={onToggleTheme}>
        Mudar tema
      </Button>
      {children}
    </div>
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