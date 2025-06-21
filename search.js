// search.js

function performSearch(searchTerm) {
  if (!searchTerm) return;

  localStorage.setItem("searchQuery", searchTerm);
  window.location.href = "products.html"; // redirect to product listing
}

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(".search-container input");
  const searchButton = document.querySelector(".search-container button");

  if (searchInput && searchButton) {
    searchButton.addEventListener("click", function () {
      const term = searchInput.value.trim().toLowerCase();
      performSearch(term);
    });

    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        const term = searchInput.value.trim().toLowerCase();
        performSearch(term);
      }
    });
  }
});
