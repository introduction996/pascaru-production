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

const arrowL = document.querySelector('#arrowL');
const arrowR = document.querySelector('#arrowR');
arrowL.innerHTML = '<svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill=""></path> </g></svg>';
arrowR.innerHTML = '<svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill=""></path> </g></svg>';


