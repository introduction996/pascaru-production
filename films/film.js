const bunkerVideo = '<iframe width="" height="" src="https://www.youtube.com/embed/3u7LlxhrFyo?si=sxevnfQin2KEDm6Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
const hillsVideo = '<iframe width="" height="" src="https://www.youtube.com/embed/eWgnWaYzt9g?si=22jGETXrerGRmrDy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
const gorgeVideo = '<iframe width="" height="" src="https://www.youtube.com/embed/yNBuJxo-GBk?si=EXz5NZxcl4tiwVC6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';

const videoFrameOne = document.querySelector('.location.one>.location-media>.media-video');
const vidoeFrameTwo = document.querySelector('.location.two>.location-media>.media-video');
const vidoeFrameThree = document.querySelector('.location.three>.location-media>.media-video');

videoFrameOne.innerHTML = bunkerVideo;
vidoeFrameTwo.innerHTML = hillsVideo;
vidoeFrameThree.innerHTML = gorgeVideo;