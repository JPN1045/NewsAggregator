const API_KEY = "efd7649a596648cdb1824df215575adf";

const newsContainer = document.getElementById("newsContainer");

async function fetchNews(category, searchQuery= "") {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&q=${searchQuery}&apiKey=${API_KEY}`;
    try{
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        if(data.articles){
            displayArticles(data.articles);
        }
        else {
            newsContainer.innerHTML = "<p>No news found!!</p>"
        }   
    }    
    catch(error){
        console.error("Error fetching news", error);
        newsContainer.innerHTML = "<p>Failed to fetch news!!</p>"
    }
}
 function displayArticles(articles){
    newsContainer.innerHTML = "";
    articles.forEach(article => {
        const newsCard = document.createElement("div");
        newsCard.classList.add("news-card");
        newsCard.innerHTML = `
        <img src="${article.urlToImage || 'https://via.placeholder.com/300'}" alt="News Image">
        <div class="news-card-content">
            <h3>${article.title}</h3>
            <p>${article.description || "No description available."}</p>
            <a href="${article.url}" target="_blank">Read More</a>
        </div>`;
        newsContainer.appendChild(newsCard);
    });
 }