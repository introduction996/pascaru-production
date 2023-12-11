const modal = document.querySelector("#contact-modal");
const contactButton = document.querySelector(".contact-button");
contactButton.addEventListener('click', () => {
    modal.style.cssText += "display: flex;";
    modal.show();
})

// email
emailjs.init("9sXHCqbu7V1vS6sx-");
function sendEmail() {
    const params = {
        from_name: document.querySelector('input#name').value,
        from_email: document.querySelector('input#email').value,
        phone_nr: document.querySelector('input#phone-nr').value,
        message: document.querySelector('textarea#message').value
    }
    emailjs.send('service_27bv1zv', 'template_tlozunl', params).then((res) => {
        console.log(res.status);
        modal.style.cssText -= "display: flex;";
        modal.close();
    })
}

const closeButton = document.querySelector('.close');
closeButton.innerHTML = '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"></path></g></svg>';
closeButton.addEventListener('click', () => {
    modal.style.cssText -= "display: flex;";
    modal.close();
})