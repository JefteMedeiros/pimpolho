document.addEventListener('DOMContentLoaded', function() {
  handleToggleCat();
});

const catSwitch = document.querySelector("#switch")
const catSwitchBall = document.querySelector("#switch-ball")
const catPic = document.querySelector("#cat-pic")

function handleToggleCat() {
  catSwitch.addEventListener("click", () => {
    catSwitchBall.classList.toggle("switch-ball-toggled");
  
    const isChecked = catSwitch.getAttribute('data-checked') === 'true';
    catSwitch.setAttribute('data-checked', String(!isChecked));
    catSwitch.setAttribute('aria-checked', String(!isChecked));

    if (isChecked) {
      catPic.src = "pimpolho.jpeg";
    } else {
      catPic.src = "casca-de-bala.jpeg";
    }
  })
}

