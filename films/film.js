const bunkerVideo = '<iframe width="" height="" src="https://www.youtube.com/embed/3u7LlxhrFyo?si=sxevnfQin2KEDm6Z" title="YouTube video player" frameborder="0" allow="" allowfullscreen></iframe>';
const hillsVideo = '<iframe width="" height="" src="https://www.youtube.com/embed/eWgnWaYzt9g?si=22jGETXrerGRmrDy" title="YouTube video player" frameborder="0" allow="" allowfullscreen></iframe>';
const gorgeVideo = '<iframe width="" height="" src="https://www.youtube.com/embed/yNBuJxo-GBk?si=EXz5NZxcl4tiwVC6" title="YouTube video player" frameborder="0" allow="" allowfullscreen></iframe>';

const videoFrameOne = document.querySelector('.location.one>.location-media>.media-video');
const vidoeFrameTwo = document.querySelector('.location.two>.location-media>.media-video');
const vidoeFrameThree = document.querySelector('.location.three>.location-media>.media-video');

videoFrameOne.innerHTML = bunkerVideo;
vidoeFrameTwo.innerHTML = hillsVideo;
vidoeFrameThree.innerHTML = gorgeVideo;

//location showcase photo gallery control
const modal = document.querySelector('#modal-photo-showcase');
const modalInnerContainer = document.querySelector('#modal-container');
const mediaPhotos = document.querySelectorAll('.media-photo');
const imgDiv = document.createElement('div');
imgDiv.setAttribute('id', 'img');
mediaPhotos.forEach(photo => {
    photo.addEventListener('click', () => {
        modal.show();
        imgDiv.style.backgroundImage = `url('../assets/films_assets/photo-F-${photo.dataset.order}.png')`;
        if (modalInnerContainer.firstChild !== modalInnerContainer.lastChild) {
            modalInnerContainer.removeChild(modalInnerContainer.lastChild);
        }
        modalInnerContainer.appendChild(imgDiv);
        modal.blur();
        if (parseInt(photo.dataset.order) <= 3) {
            modal.style.top = "0";
        } else if (parseInt(photo.dataset.order) > 3 && parseInt(photo.dataset.order) <=6) {
            modal.style.top = "34%";
        } else {modal.style.top = "66%"}
    })
})

const closeButton = document.querySelector('.close');
closeButton.innerHTML = '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"></path></g></svg>';
closeButton.addEventListener('click', () => {
    modal.close();
})