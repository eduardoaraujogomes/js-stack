import React from 'react';
import Header from './Header';
import Post from './Post';


//Props(Propriedades) - São dados que um componente pai passa para um componente filho.
//Props são apenas read only, ou seja, não podemos alterar o valor de uma propriedade.
//A alteração tem que ser feita no componente pai.

function App() {
  return (
    <>
      <Header >
        <h2>Posts da semana</h2>
      </Header>

      <hr />
      <Post
        likes={20}
        post={{
          title: "Título da notícia 01",
          subtitle: "Subtítulo da notícia 01"
        }}
      />
      <Post
        likes={10}
        post={{
          title: "Título da notícia 02",
          subtitle: "Subtítulo da notícia 02"
        }}
      />
      <Post
        likes={50}
        post={{
          title: "Título da notícia 03",
          subtitle: "Subtítulo da notícia 03"
        }}
      />
    </>
  );
}

export default App;