document.addEventListener("DOMContentLoaded", function() {
  const articleTitle = document.querySelector(".article-header h1");
  if (articleTitle) {
    document.title = articleTitle.textContent + " | SehatYok";
  }
});
