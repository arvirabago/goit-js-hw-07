import { galleryItems } from './gallery-items.js';

document.addEventListener("DOMContentLoaded", function () {
  const galleryList = document.querySelector('.gallery');

  // Gallery items to ul.gallery
  const galleryMarkup = galleryItems.map((image) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${image.original}">
        <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
      </a>
    </li>
  `).join('');

  galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

    // Initialize SimpleLightbox 
    const lightbox = new SimpleLightbox('.gallery a');

});
