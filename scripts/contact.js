document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("HEb-pfXU6MhPdXqgS");
});

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const serviceID = "service_7hunsho"; 
  const templateID = "template_m266mot"; 

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  emailjs.send(serviceID, templateID, formData)
      .then(() => {
        alert("Message sent successfully!");
        document.getElementById("name").value = '',
        document.getElementById("email").value = '',
        document.getElementById("message").value = ''
      })
      .catch(() => {
        alert("Failed to send message. Please try again.");
      });
});
