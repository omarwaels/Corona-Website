let navButtons = Array.from(document.querySelectorAll("li a.me-4"));
console.log(navButtons);
function buttonUnfocus(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].classList.remove("text-primary");
  }
}
// for (let i = 0; i < navButtons.length; i++) {
//   navButtons[i].addEventListener("click", focused);
// }

// function focused(e) {
//   let index = navButtons.indexOf(e.target);
//   buttonUnfocus(navButtons);
//   navButtons[index].classList.add("text-primary");
// }

var section = document.querySelectorAll(".section");
console.log(section);
var sections = {};
var i = 0;

for (let i = 0; i < section.length; i++) {
  sections[i] = section[i].offsetTop;
}

console.log(sections);

window.onscroll = function () {
  var scrollPosition =
    document.documentElement.scrollTop || document.body.scrollTop;

  for (i in sections) {
    if (sections[i] - 90 <= scrollPosition) {
      buttonUnfocus(navButtons);
      navButtons[i].classList.add("text-primary");
    }
  }
};
