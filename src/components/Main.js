import React from "react";
import { api } from '../utils/Api';
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
          <img className="profile__avatar" src="<%=require(&quot;../../images/image.jpg" alt="Аватар" />
        </button>
        <h1 className="profile__user-name" />
        <p className="profile__user-job" />
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