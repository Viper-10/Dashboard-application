const sideBarIcon = document.querySelector(".fa-bars");
const dropdownMenu = document.querySelector(".dropdown-menu");
let isDropdownOpen = false;

sideBarIcon.addEventListener("click", showSideBar);

function showSideBar() {
  isDropdownOpen = !isDropdownOpen;
  changeDropdownVisibility();
}

function changeDropdownVisibility() {
  if (isDropdownOpen) {
    dropdownMenu.style.display = "block";
  } else {
    dropdownMenu.style.display = "none";
  }
}
