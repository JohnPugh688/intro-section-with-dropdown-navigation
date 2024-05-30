// hamburger dropdown menu
function toggleMobileMenu() {
  document.getElementById("hamburger-button").classList.toggle("toggle-btn");
  document
    .getElementById("mobile-menu-container")
    .classList.toggle("invisible");
  document.getElementById("mobile-menu-bg").classList.toggle("opacity-0");
  document.getElementById("mobile-menu-bg").classList.toggle("opacity-70");
  document.getElementById("mobile-menu").classList.toggle("translate-x-full");
}
// select all dropdown toggles

document.addEventListener("DOMContentLoaded", (event) => {
  const dropdownButtons = document.querySelectorAll(
    "#dropdownButton, #companyDropdownButton"
  );

  dropdownButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const dropdownMenu = this.querySelector(".dropdown-menu");
      const openIcon = this.querySelector(".menu-open");
      const closeIcon = this.querySelector(".menu-close");

      // Toggle the dropdown menu
      dropdownMenu.classList.toggle("hidden");

      // Toggle icons
      openIcon.classList.toggle("hidden");
      closeIcon.classList.toggle("hidden");

      // Prevent event from bubbling up to document
      e.stopPropagation();
    });
  });

  // Close dropdown if clicked outside
  document.addEventListener("click", function () {
    dropdownButtons.forEach((button) => {
      const dropdownMenu = button.querySelector(".dropdown-menu");
      const openIcon = button.querySelector(".menu-open");
      const closeIcon = button.querySelector(".menu-close");

      if (!dropdownMenu.classList.contains("hidden")) {
        dropdownMenu.classList.add("hidden");
        openIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
      }
    });
  });

  // Prevent dropdown from closing when clicking inside the menu
  document.querySelectorAll(".dropdown-menu").forEach((menu) => {
    menu.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  });
});

// dropdownToggles.forEach((toggle) => {
//   toggle.addEventListener("click", () => {
//     const dropdownMenu = toggle.nextElementSibling;

//     if (dropdownMenu.classList.contains("hidden")) {
//       document.querySelectorAll(".dropdown-menu").foreach((menu) => {
//         menu.classList.add("hidden");
//       });
//       dropdownMenu.classList.remove("hidden");
//     } else {
//       dropdownMenu.classList.add("hidden");
//     }
//   });
// });
