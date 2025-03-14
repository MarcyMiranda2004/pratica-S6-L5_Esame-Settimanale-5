document.addEventListener("DOMContentLoaded", () => {
  // Mostra la searchbar
  const searchButton = document.getElementById("search-btn");
  const searchInput = document.getElementById("search-input");

  searchButton.addEventListener("click", () => {
    searchInput.classList.toggle("d-none");
  });

  // vai alla profile page
  document.getElementById("profile").addEventListener("click", () => {
    window.location.href = "/assets/html/profile-page.html";
  });
});
