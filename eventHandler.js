const searchInput = document.getElementById("searchInput");
const category = document.getElementById("category");
const toggleMode = document.getElementById("toggleMode");

window.addEventListener("DOMContentLoaded", () => {
    fetchNews("general");
});

searchInput.addEventListener("input", () =>{
    const query = searchInput.value.trim();
    fetchNews(category.value, query);
});

category.addEventListener("change", () => {
    fetchNews(category.value, searchInput.value.trim());
});

toggleMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleMode.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
});