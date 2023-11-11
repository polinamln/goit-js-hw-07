import { galleryItems } from './gallery-items.js';
// Change code below this line




const list = document.querySelector(".gallery");

list.addEventListener('click', handleClick);

function handleClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }

    const currentImg = event.target.dataset.source;


    const instance = basicLightbox.create(`
        <img src="${currentImg}" width="800" height="600">
    `)

    instance.show()
}



createMarcup(galleryItems);

function createMarcup(items) {
    const htmlArr = items.map(item =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img
                    class="gallery__image"
                    src="${item.preview}"
                    data-source="${item.original}";
                    alt="${item.description}"
                />
            </a>
        </li>`
    );

    list.insertAdjacentHTML('beforeend', htmlArr.join(''));
};




console.log(galleryItems);
