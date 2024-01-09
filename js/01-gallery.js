import { galleryItems } from './gallery-items.js';


// Change code below this line
const galleryList = document.querySelector('.gallery');
let lightboxInstance = null; 

const galleryMarkup = galleryItems.map((image) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${image.original}">
      <img
        class="gallery__image"
        src="${image.preview}"
        data-source="${image.original}"
        alt="${image.description}"
      />
    </a>
  </li>
`).join('');

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

const openModal = (source) => {
  lightboxInstance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">
  `);

  lightboxInstance.show();

  // Add event listener for the Escape key to close the modal
  document.addEventListener('keydown', handleEscapeKey);
};

const handleEscapeKey = (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
  }
};

const closeLightbox = () => {
 
  if (lightboxInstance && lightboxInstance.visible()) {
    lightboxInstance.close();
    lightboxInstance = null;

 
    document.removeEventListener('keydown', handleEscapeKey);
  }
};

const onContainerClick = (e) => {
  e.preventDefault();

  if (e.target.classList.contains("gallery__image")) {
    const source = e.target.dataset.source;
    openModal(source);
  }
};

galleryList.addEventListener("click", onContainerClick);


document.addEventListener('click', (e) => {
  if (lightboxInstance && !lightboxInstance.visible()) {
    closeLightbox();
  }
});

console.log(galleryItems);
