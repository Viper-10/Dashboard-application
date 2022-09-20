const mobileSideBarMenu = document.querySelector(".mobile-dashboard-view");
let isDropdownOpen = false;

window.addEventListener("click", handleClick);

function handleClick(e) {
  if (e.target.classList.contains("fa-bars")) {
    isDropdownOpen = !isDropdownOpen;
    changeDropdownVisibility();
  } else if (!mobileSideBarMenu.contains(e.target)) {
    isDropdownOpen = false;
    changeDropdownVisibility();
  }
}

function changeDropdownVisibility() {
  if (isDropdownOpen) {
    mobileSideBarMenu.style.display = "block";
  } else {
    mobileSideBarMenu.style.display = "none";
  }
}
