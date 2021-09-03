import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
// import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";



const img = galleryItems.map(item => {
    return `<a class="gallery__item" href=${item.original}>
    <img class="gallery__image" src=${item.preview} alt=${item.description} />
  </a>`}).join("");


    
    
const matrix= document.querySelector('.gallery')
matrix.innerHTML = img;
matrix.addEventListener('click',(e) => {
    e.preventDefault();
    const lightbox = new SimpleLightbox('.gallery a',{captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,},)
    console.log(lightbox);
    
    
})



// matrix.addEventListener("click", openimg);

// function openimg(e){
    
//     e.preventDefault();


//     if (!e.target.classList.contains("gallery__image")) {
//       return;
//     }

//     const mod = basicLightbox.create(`<img src=${e.target.dataset.source} width="800" height="600">`) 
//     mod.show()
//     window.addEventListener("keydown",e=>{
      
//       if (e.code === "Escape"){
//         console.log(e.code);
//         mod.close();
//       }}) 
   
//   }
    
