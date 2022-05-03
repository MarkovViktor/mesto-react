import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup'

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' })

  const closeAllPopups = () => {
    setIsAddPlacePopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard({ name: '', link: '' })
  }

const handleCardClick = (card) => {
    setSelectedCard(card)
  };

const handleEditAvatarClick = () => {
  setIsEditAvatarPopupOpen(true)
};

const handleEditProfileClick = () => {
  setIsEditProfilePopupOpen(true)
};

const handleAddPlaceClick = () => {
  setIsAddPlacePopupOpen(true)
};


  return (

    <div className="page">
      <Header />
      <Main 
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />

    <ImagePopup card={selectedCard} onClose={closeAllPopups} />

    <PopupWithForm
      name='edit-profile'
      title='Редактировать профиль'
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups} 
      formName='Форма изменения имени'>
        <input id="name" name="name" required type="text" placeholder="Имя" className="popup__input popup__input_type_user-name" minLength="2" maxLength="40" />
        <span id="error-name" className="popup__input-error"></span>
        <input id="about" name="about" required type="text" placeholder="О себе" className="popup__input popup__input_type_user-job" minLength="2"
          maxLength="200" />
        <span id="error-about" className="popup__input-error"></span> 
    </PopupWithForm>

    <PopupWithForm
      name='edit-avatar'
      title='Обновить аватар'
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
      formName='Форма изменения аватара'>
        <input id="avatar" name="name" required type="url" placeholder="Ссылка на аватар" className="popup__input popup__input_type_url" />
        <span id="error-avatar" className="popup__input-error"></span>
    </PopupWithForm>

    <PopupWithForm
        name='add-picture'
        title='Новое место'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        formName='Форма добавления карточки' >
        <input id="img" name="name" required type="text" placeholder="Название" className="popup__input popup__input_type_place-name" minLength="2" maxLength="30" />
        <span id="error-img" className="popup__input-error"></span>
        <input id="url" name="link" required type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_type_place-picture" />
        <span id="error-img" className="popup__input-error"></span> 
    </PopupWithForm>

  </div>
  );
}

export default App;
