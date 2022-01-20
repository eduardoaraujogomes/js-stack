import React from 'react';
import Header from './Header';
import Post from './Post';

const posts = [
  {
    title: 'Title#01', subtitle: 'Sub#01', likes: 20
  },
  {
    title: 'Title#02', subtitle: 'Sub#02', likes: 10
  },
  {
    title: 'Title#03', subtitle: 'Sub#03', likes: 50
  },
];


//Props(Propriedades) - São dados que um componente pai passa para um componente filho.
//Props são apenas read only, ou seja, não podemos alterar o valor de uma propriedade.
//A alteração tem que ser feita no componente pai.

//toda vez que a gente coloca um array dentro do jsx ele vai tentar pegar e por na tela
// porém alguns formatos ele não sabe o que fazer e pode quebrar.

function App() {
  return (
    <>
      <Header >
        <h2>Posts da semana</h2>
      </Header>

      <hr />
      {posts.map(post => (
        <Post
          key={post.title}
          likes={post.likes}
          post={{
            title: post.title,
            subtitle: post.subtitle
          }}
        />
      ))}
    </>

  );
}

export default App;