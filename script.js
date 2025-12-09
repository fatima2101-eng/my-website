window.addEventListener('load', () => {
  const nameBox = document.getElementById('name-box');
  const nameField = document.getElementById('name-field');
  const nameBtn = document.getElementById('name-btn');

  nameBtn.addEventListener('click', () => {
    const name = nameField.value.trim();

    if (name) {
      // to Remove the box
      nameBox.style.display = 'none';

      //  greeting below navbar
      const greeting = document.createElement('p');
      greeting.textContent = `Hello, ${name}! Which cuisine would you like to try today?`;

      greeting.style.color = "#e68947";
      greeting.style.fontSize = "30px";
      greeting.style.textAlign = "center";
      greeting.style.marginTop = "10px";
      greeting.style.opacity = 0;
      greeting.style.transition = "opacity 1s ease";

      const navbar = document.querySelector('.navbar');
      navbar.insertAdjacentElement('afterend', greeting);

      // Fade in the greeting
      setTimeout(() => {
        greeting.style.opacity = 1;
      }, 50);
    } else {
      alert("Please enter your name!");
    }
  });
});
function surpriseMe() {
  let pages = [
    "american.html",
    "indian.html",
    "arabic.html",
    "chinese.html",
    "mexican.html",
    "japanese.html"
  ];

  let randomPage = pages[Math.floor(Math.random() * pages.length)];
  window.location.href = randomPage;
}
