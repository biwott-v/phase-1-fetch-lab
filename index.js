function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => response.json()) // Parse JSON correctly
    .then(data => renderBooks(data));  // Call renderBooks with data
}

function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

// Call fetchBooks() when the page loads
document.addEventListener("DOMContentLoaded", function() {
  fetchBooks();
});
