const news_banner = document.getElementById("news_banner");
const topNews = document.getElementById("topNews");


    $.ajax({
        url: "https://newsapi.org/v2/everything?q=wichtigste&sortBy-popularity&apikey=d6c732c05edd4696add8f5066bc1e422",
        type: 'GET',
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        success: function (data) {
            topNews.innerHTML = "";
            for (let i = 0; i < data.totalResults; i++) {
                var box = document.createElement("div");
                
                var p = document.createElement("p");
                p.innerHTML = data.articles[i].description;
                
                var img = document.createElement("img");
                img.src = data.articles[i].urlToImage;

                var publishedAt = document.createElement("publishedAt");
                publishedAt.innerHTML = data.articles[i].publishedAt;
                
                url.appendChild(img);
                box.appendChild(p);
                box.append(url);
                box.appendChild(publishedAt);
                topNews.appendChild(box);
                }
        },
        error: function () {
            topNews.innerHTML = "Es konnten keine News geladen werden!";
        }
    });