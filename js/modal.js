(() => {
  const refs = {
    openModalBtn: document.querySelector(".hero__button"),
    closeModalBtn: document.querySelector(".modal-window__close"),
    modal: document.querySelector(".modal"),
  };
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.modal.classList.toggle("modal");
  }
})();
(() => {
  document
    .querySelector(".modal-window__form")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      new FormData(e.currentTarget).forEach((value, name) =>
        console.log(`${name}:${value}`)
      );
    });
})();
(() => {
  const refs = {
    openModalBtn: document.querySelector(".contakts-list__menu"),
    closeModalBtn: document.querySelector(".header-modal__close"),
    modal: document.querySelector(".head-modal"),
  };
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("head-modal--close");
  }
})();
