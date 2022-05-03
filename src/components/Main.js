import React from "react";
import { api } from '../utils/api';
import Card from "./Card";

function Main(props) {

    const [userName, setUserName] = React.useState('')
    const [userDescription , setUserDescription ] = React.useState('')
    const [userAvatar, setUserAvatar] = React.useState('')
    const [cards, setCards] = React.useState([])
  
    React.useEffect(() => {
      api.getProfile()
      .then((res) => {
        setUserName(res.name)
        setUserAvatar(res.avatar)
        setUserDescription(res.about)
      })
      .catch(err => {
        console.log(err); 
      });
      api.getInitialCards()
      .then((card) => {
        setCards(card)
      })
      .catch(err => {
        console.log(err); 
      });
    },[])

  return (
    <main className="content">
      <section className="profile">
        <button className="profile__avatar-button" onClick={props.onEditAvatar}>
          <img className="profile__avatar" src={userAvatar} alt="Аватар" />
        </button>
        <h1 className="profile__user-name">{userName}</h1>
        <p className="profile__user-job">{userDescription}</p>
        <button className="profile__edit-button" onClick={props.onEditProfile} type="button" aria-label="изменить профиль" />
        <button className="profile__add-button" onClick={props.onAddPlace} type="button" aria-label="добавить место" />
      </section>
      <section className="places">
        {cards.map(card => <Card card={card} key={card._id} onCardClick={props.onCardClick}/>)}
      </section>
    </main>
  )
}
export default Main;