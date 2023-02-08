// toggle class active

const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
// cari element yang nama id nya #hamburger-menu, lalu ketika di klik (onclick) sama dengan jalanin fungsi berikut ini
document.querySelector("#hamburger-menu").onclick = () => {
  // fungsinya adalah navbarNav classlistnya kita toggle, tambahin class active
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

// ketika document nya .addEventlistener, ketika di klik dimanapun dihalaman ('click', function(e)), ketika di klik kita jalankan fungsi event nya
// ketika di klik kita jalankan fungsi, ambil event nya
document.addEventListener("click", function (e) {
  // jika kita mengklik di luar hamburger menu dan di luar navbar (e.target = yang di klik mouse saat itu)
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target))
    navbarNav.classList.remove("active"); //meremove class active
});
