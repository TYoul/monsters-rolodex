import React, { memo } from 'react';
import './card-list.style.css';
import Card from '../card/card.components';

const CardList = memo(({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
});

export default CardList;
