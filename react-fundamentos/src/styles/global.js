import { createGlobalStyle } from 'styled-components';


// começando a criar um estilo global chamando a função createGlobalStyle
// o styled-components vai criar um arquivo global.css
// para executar a função createGlobalStyle, precisamos importar o styled-components
// e iniciar com crase, pois o styled-components é uma função e não um componente
// e depois ele vai converter a string em css

export default createGlobalStyle`
  body {
    background: ${props => props.theme.backgroundColor};
    font-family: sans-serif;
    color: ${({ theme }) => theme.textColor};
  }
`;