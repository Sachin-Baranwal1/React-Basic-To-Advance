const left = document.querySelector("#left");
let l = 100,
  r = 0;
const event = left.addEventListener("click", () => {
  if (r > 0) {
    l = l + 1;
    r = r - 1;
    updateUI();
  }
});

const right = document.querySelector(".right");
const event2 = right.addEventListener("click", () => {
  if (l > 0) {
    l = l - 1;
    r = r + 1;
    updateUI();
  }
});

function updateUI() {
  document.getElementById("leftApples").textContent = `${l}🍎apples`;
  document.getElementById("rightApples").textContent = `${r} 🍎apples`;
}
