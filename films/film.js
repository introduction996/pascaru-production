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
        modalInnerContainer.innerHTML = '';
        modalInnerContainer.appendChild(imgDiv);
        modal.blur();
        if (parseInt(photo.dataset.order) <= 3) {
            modalInnerContainer.style.top = "0";
        } else if (parseInt(photo.dataset.order) > 3 && parseInt(photo.dataset.order) <=6) {
            modalInnerContainer.style.top = "33%";
        } else {modalInnerContainer.style.top = "66%"}
    })
})