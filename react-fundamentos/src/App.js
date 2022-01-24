import React, { useState } from 'react';
import Header from './Header';
import Post from './Post';

import styles from './App.css';

import { ThemeProvider } from './ThemeContext';

//Props(Propriedades) - São dados que um componente pai passa para um componente filho.
//Props são apenas read only, ou seja, não podemos alterar o valor de uma propriedade.
//A alteração tem que ser feita no componente pai.

//toda vez que a gente coloca um array dentro do jsx ele vai tentar pegar e por na tela
// porém alguns formatos ele não sabe o que fazer e pode quebrar.

//a context serve para que componentes filhos possam acessar o estado do componente pai.



function App() {

  //Sempre que você quiser que o React renderize/Atualize algo em tela, você precisa de um estado.
  //O estado é um objeto que armazena informações que podem ser alteradas.
  //O React sabe que o estado mudou e vai renderizar novamente a tela.




  const [posts, setPosts] = useState([
    {
      id: Math.random(), title: 'Title#01', subtitle: 'Sub#01', likes: 20, read: false
    },
    {
      id: Math.random(), title: 'Title#02', subtitle: 'Sub#02', likes: 10, read: true
    },
    {
      id: Math.random(), title: 'Title#03', subtitle: 'Sub#03', likes: 50, read: false
    },
    {
      id: Math.random(), title: 'Title#04', subtitle: 'Sub#04', likes: 50, read: true
    },
  ]);


  //prevState é o estado anterior, ou seja, o estado anterior antes de atualizar o estado.
  //prevState é utilizado, para evitar inconsistências no front-end.
  //setState é a função que atualiza o estado.

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title#0${prevState.length + 1}`,
        subtitle: `Sub#0${prevState.length + 1}`,
        likes: 50
      }
    ]);
  }

  function handleRemovePost(postId) {
    setPosts((prevState) => (
      prevState.filter(post => post.id !== postId)
    ));
  }


  return (
    <ThemeProvider>
      <Header>
        <h2 className={styles.title}>Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

      <hr />
      {posts.map(post => (
        <Post
          key={post.id}
          onRemove={handleRemovePost}
          post={post}
        />
      ))}
    </ThemeProvider>

  );
};

export default App;