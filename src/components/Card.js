import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="place" >
      <img className="place__image place__picture_link" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
      <button type="button" aria-label="удалить" className="place__delete place__button_delete"></button>
      <h2 className="place__title place__picture_name">{props.card.name}</h2>
      <button type="button" aria-label="поставить лайк" className="place__like place__button_like"></button>
      <span className="place__like-count">{props.card.likes.length}</span>
    </div>
  );
}

export default Card;