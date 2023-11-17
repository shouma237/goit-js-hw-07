import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const createGallery = (el) => {
  return el
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`;
    })
    .join("");
};

const photos = createGallery(galleryItems);

galleryList.insertAdjacentHTML("beforeend", photos);

// -------------------------------------------

const handleGalleryClick = (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const urlOriginal = event.target.dataset.source;

  // Create Baisc Lightbox Instance

  const instance = basicLightbox.create(`<img src="${urlOriginal}">`);

  instance.show();

  // escKeyPress

  const escKeyPress = (event) => {
    if (event.key === "Escape") {
      instance.close();
      window.removeEventListener("keydown", escKeyPress);
    }
  };

  window.addEventListener("keydown", escKeyPress);
};

galleryList.addEventListener("click", handleGalleryClick);
