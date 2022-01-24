import React from "react";
import PropTypes from 'prop-types';

import PostHeader from "./PostHeader";

import styles from './Post.scss';

import { Subtitle, Rate } from "./styles";

export default function Post(props) {

  // pode fazer com if normal, com ternário ou short circuit evaluation, a renderização condicional

  /*   if(props.post.read) {
      return <h2>{props.post.title} já foi lido</h2>
    }
   */

  // ternário

  /*   return (
      <>
        {props.post.read
          ? <h2>{props.post.title} já foi lido</h2>
          : <>
            <article>
              <strong>
                {props.post.read ? <s>{props.post.title}</s> : props.post.title}
              </strong>
              <button onClick={() => props.onRemove(props.post.id)}>Remover</button>
              <br />
              <small>{props.post.subtitle}</small><br />
              Media: {props.post.likes / 2}
            </article>
            <br />
          </>}
      </>
    ); */

  //short circuit evaluation
  //se for verdadeiro, retorna o da direita, senão, retorna o da esquerda


  return (
    <article className={
      props.post.removed
        ? styles.postDeleted
        : styles.post
    }>
      <PostHeader
        onRemove={props.onRemove}
        post={{
          id: props.post.id,
          title: props.post.title,
          read: props.post.read,
        }}
      />
      <Subtitle>{props.post.subtitle}</Subtitle>
      <Rate>Media: {props.post.likes / 2}</Rate>
    </article>
  );
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    subtitle: PropTypes.string.isRequired,
    read: PropTypes.bool,
    removed: PropTypes.bool,
  }).isRequired
};