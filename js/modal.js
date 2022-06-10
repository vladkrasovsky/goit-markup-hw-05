(() => {
  const refs = {
    body: document.body,
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.style.paddingRight = `${getBrwoserScrollbarWidth()}px`;
    refs.body.style.overflow = 'hidden';
    if (refs.modal.classList.contains('is-hidden')) {
      refs.body.style.paddingRight = 0;
      refs.body.style.overflow = 'auto';
    }
  }

  function getBrwoserScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
  }
})();
