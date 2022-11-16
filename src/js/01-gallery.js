import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryCards = document.querySelector('.gallery');
galleryCards.addEventListener('click', onClickShowModal);

const galleryMarkup = galleryItems.map(galleryCardMarkup).join('');

galleryCards.insertAdjacentHTML('afterbegin', galleryMarkup);

function galleryCardMarkup({ preview, original, description }) {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
      </a> 
  </div>`;
}

function onClickShowModal(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') return;

  const gallery = basicLightbox.create(
    `
  <div class="modal">
    <img
    class="modal__image"
    src="${e.target.dataset.source}"
    />
  </div>
  `,
    {
      onShow: gallery => {
        window.addEventListener('keydown', onEscPress);
        gallery.element().querySelector('img').onclick = gallery.close;
      },
      onClose: gallery => {
        window.removeEventListener('keydown', onEscPress);
      },
    }
  );

  function onEscPress(e) {
    if (e.code === 'Escape') {
      gallery.close();
    }
  }

  gallery.show();
}
