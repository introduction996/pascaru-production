const modal = document.querySelector("#contact-modal");
const contactButton = document.querySelector(".contact-button");
contactButton.addEventListener('click', () => {
    modal.style.cssText += "display: flex;";
    modal.show();
})
modal.close()