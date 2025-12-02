class FormValidator {
  constructor(settings, formEl) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._formEl = formEl;
  }

  _showInputError(inputElement, errorMessage) {
    const errorElementId = `#${inputElement.id}-error`;
    const errorElement = this._formEl.querySelector(errorElementId);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorElementId = `#${inputElement.id}-error`;
    const errorElement = this._formEl.querySelector(errorElementId);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => !inputElement.validity.valid);
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  }

  _setEventListeners() {
    this._inputList = Array.from(
      this._formEl.querySelectorAll(this._inputSelector)
    );
    this._buttonElement = this._formEl.querySelector(
      this._submitButtonSelector
    );

    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._formEl.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }

  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }
}

export default FormValidator;

// class FormValidator {
//   constructor(settings, formEl) {
//     this._inputSelector = settings.inputSelector;
//     this._submitButtonSelector = settings.submitButtonSelector;
//     this._errorClass = settings.errorClass;
//     this._inputErrorClass = settings.inputErrorClass;
//     this._inactiveButtonClass = settings.inactiveButtonClass;
//     this._formEl = formEl;
//   }

//   // implement all the other methods Pending

//   _checkInputValidity(inputElement) {
//     // implement this method pending
//     // work through errors in consoloe as done for enableValidation
//     //      if (!inputElement.validity.valid) {
//     //     showInputError(
//     //       formElement,
//     //       inputElement,
//     //       inputElement.validationMessage,
//     //       settings
//     //     );
//     //   } else {
//     //     hideInputError(formElement, inputElement, settings);
//     //   }
//   }

//   _setEventListeners() {
//     this._inputList = Array.from(
//       this._formEl.querySelectorAll(this._inputSelector)
//     );
//     // const buttonElement = this._formEl.querySelector(
//     //   this._submitButtonSelector
//     // );
//     // finish implementing the set event listenes Pending
//     // toggleButtonState(inputList, buttonElement, settings);

//     this._inputList.forEach((inputElement) => {
//       inputElement.addEventListener("input", () => {
//         this._checkInputValidity(inputElement);
//         // toggleButtonState(inputList, buttonElement, settings);
//       });
//     });
//   }

//   enableValidation() {
//     this._formEl.addEventListener("submit", (evt) => {
//       evt.preventDefault();
//     });

//     this._setEventListeners();
//   }
//   resetValidation() {
//     this._toggleButtonState();
//     this._inputList.forEach((inputElement) => {
//       this._hideInputError(inputElement);
//     });
//   }
// }
// export default FormValidator;
