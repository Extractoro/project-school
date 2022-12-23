(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-hero-open]'),
    closeModalBtn: document.querySelector('[data-modal-hero-close]'),
    modal: document.querySelector('[data-modal-hero]'),
  };

  //   const openModal = document.querySelector('[data-modal-hero-open]');
  //   const closeModal = document.querySelector('[data-modal-hero-close]');
  //   const modal = document.querySelector('[data-modal-hero]');

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  window.addEventListener('keydown', escModal);
  refs.modal.addEventListener('click', removeModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  function removeModal(e) {
    if (e.target === refs.modal) {
      refs.modal.classList.add('is-hidden');
    }
  }

  function escModal(e) {
    if (e.key === 'Escape') {
      refs.modal.classList.add('is-hidden');
    }
  }
})();
