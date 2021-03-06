(() => {
  const refs = {
    body: document.body,
    header: document.querySelector('.header'),
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    let scrollBarWidth = `${getBrwoserScrollbarWidth()}px`;
    refs.modal.classList.toggle('is-hidden');
    refs.body.style.paddingRight = scrollBarWidth;
    refs.body.style.overflow = 'hidden';
    refs.header.style.right = scrollBarWidth;
    if (refs.modal.classList.contains('is-hidden')) {
      refs.body.style.paddingRight = 0;
      refs.body.style.overflow = 'auto';
      refs.header.style.right = 0;
    }
  }

  function getBrwoserScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
  }
})();
