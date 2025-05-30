document.addEventListener("DOMContentLoaded", function() {
  const articleTitle = document.querySelector(".recipe-header h1");
  if (articleTitle) {
    document.title = articleTitle.textContent + " | SehatYok";
  }
});