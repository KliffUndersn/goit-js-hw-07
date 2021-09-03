import { galleryItems } from './gallery-items.js';
// Change code below this line
// import * as basicLightbox from 'basiclightbox'
const img = galleryItems.map(item => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>
      </div>`}).join("");

 
    
    
const matrix= document.querySelector('.gallery')
matrix.innerHTML = img;
matrix.addEventListener("click", openimg);

function openimg(e){
    
    e.preventDefault();


    if (!e.target.classList.contains("gallery__image")) {
      return;
    }

     basicLightbox.create(`<img src=${e.target.dataset.source} width="800" height="600">`) .show()
    }










