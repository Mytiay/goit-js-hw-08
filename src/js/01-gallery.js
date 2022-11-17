import { galleryItems } from './gallery-items.js';

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);

const listEl = document.querySelector('.gallery');

const listTemplate = (preview, original, description) => `
<li>
<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}"/>
</a>
</li>
`;

const render = () => {
  const arrayFromListTemplate = galleryItems
    .map(item => listTemplate(item.preview, item.original, item.description))
    .join('');

  console.log(arrayFromListTemplate);

  listEl.innerHTML = arrayFromListTemplate;
};

render();
const galleryEl = new SimpleLightbox('gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
