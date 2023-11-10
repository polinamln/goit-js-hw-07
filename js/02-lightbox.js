import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector(".gallery");



list.addEventListener('click', handleClick);

function handleClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }

    const gallery = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionDelay: 250,
        captionPosition:'bottom'
    });

    const imgCaption = event.target.dataset.caption;
    const currentImg = event.target.dataset.source;

    gallery.items = [
        {
            src: currentImg,
            type: 'image',
            caption: imgCaption,
        },
    ];
}


createMarcup(galleryItems);

function createMarcup(items) {
    const htmlArr = items.map(item =>
`<li class="gallery__item">
   <a class="gallery__link" href="${item.original}" data-caption="${item.description}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a>
</li>`
    );

    list.insertAdjacentHTML('beforeend', htmlArr.join(''));
};




console.log(galleryItems);



console.log(galleryItems);
