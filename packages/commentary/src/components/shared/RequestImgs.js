import React from 'react';

export const RequestImgs = props => (
  <span className={`art`}>
    {props.submission.values.Art.map(art => {
      return (
        <img key={art.name} id={art.name} src={art.link.slice(7)} width="100" />
      );
    })}
  </span>
);
