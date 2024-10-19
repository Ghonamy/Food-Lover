// onClick Icon => Display Navbar

const icons = document.querySelector(".icons");
const bars = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-xmark");
const navbar = document.querySelector(".nav-bar");

icons.addEventListener("click", () => {
  bars.classList.toggle("active");
  xmark.classList.toggle("active");
  navbar.classList.toggle("active");
});

// onScroll Window Than 700 => Display To Up Button
const up = document.querySelector(".fa-angle-up");

window.onscroll = function () {
  if (this.scrollY >= 700) {
    up.classList.add("active");
  } else {
    up.classList.remove("active");
  }
};

// onClick on Button Back To Top
up.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// onClick on Links of Nav => Display The Section Of Link
const links = document.querySelectorAll(".nav-list li a");
const linksArray = Array.from(links);

linksArray.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
  });
});
