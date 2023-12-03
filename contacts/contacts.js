const body = document.querySelector('body');
body.addEventListener('mousedown', () => {
    if (window.getSelection) {
        window.getSelection().removeAllRanges();
    } else if (document.selection) {
        document.selection.empty()
    }
})

const mapFrame = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d808.6964245118472!2d28.825332347099806!3d47.01825323050471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97dc753081d5d%3A0x163d9ade6eb20cf1!2sPascaru%20Rental!5e0!3m2!1sen!2s!4v1701614061251!5m2!1sen!2s" width="800" height="800" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
const map = document.querySelector('.map');
map.innerHTML = mapFrame;