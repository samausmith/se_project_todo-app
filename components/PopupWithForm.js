import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit, handleAddTodo }) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;
    this._handleAddTodo = handleAddTodo;
  }

  _getInputValues() {
    this._inputList = this._popupForm.querySelectorAll(".popup__input");
    const values = {};
    this._inputList.forEach((input) => {});
    return values;
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues();
      this._handleFormSubmit(evt);
      this._handleAddTodo(true);
    });
  }
}

export default PopupWithForm;
