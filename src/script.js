
const contact = document.querySelector(".nav__link--contacto");
const popup = document.querySelector("#email-popup");
const closeModal = document.querySelector(".close-modal");

const toggleModal = () => {
  const popupStyle = window.getComputedStyle(popup);
  if (popupStyle.display === "none") {
    popup.style.display = "flex";
  } else {
    popup.style.display = "none";
  }
};

const sendEmail = () => {
  const btn = document.getElementById("button");

  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    btn.innerText = "Enviando...";

    const serviceID = "default_service";
    const templateID = "template_xto8cfe";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        toggleModal();
        btn.innerText = "Enviar Consulta";
      },
      (err) => {
        btn.value = "Send Email";
        alert(JSON.stringify(err));
      }
    );
  });
};

sendEmail();
contact.addEventListener("click", toggleModal);
closeModal.addEventListener("click", toggleModal);
