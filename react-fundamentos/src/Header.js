import React from 'react';
import PropTypes from 'prop-types';

export default function Header({ title, children }) {
  return (
    <>
      <h1 >{title}</h1>
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