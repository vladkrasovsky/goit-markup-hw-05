(() => {
  const refs = {
    header: document.querySelector('.header'),
  };

  if (refs.header.classList.contains('is-fixed')) {
    const { height: headerHeight } = refs.header.getBoundingClientRect();
    document.body.style.paddingTop = `${headerHeight}px`;
  }
})();
