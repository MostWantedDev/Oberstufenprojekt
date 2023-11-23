const unterhaltungButton = document.getElementById("unterhaltungButton");
const unterhaltungNews = document.getElementById("unterhaltungNews");


    $.ajax({
        url: "https://newsapi.org/v2/everything?q=Unterhaltung&sortBy=publishedAt&apikey=d6c732c05edd4696add8f5066bc1e422",
        type: 'GET',
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        success: function (data) {
            unterhaltungNews.innerHTML = "";
            for (let i = 0; i < data.totalResults; i++) {
                var box = document.createElement("div");
            
                var p = document.createElement("p");
                p.innerHTML = data.articles[i].description;
            
                var img = document.createElement("img");
                img.src = data.articles[i].urlToImage;
            
                var publishedAt = document.createElement("publishedAt");
                publishedAt.innerHTML = data.articles[i].publishedAt;

                var url = document.createElement("a"); 
                url.href = data.articles[i].url;
                url.target = "_blank";

                
                url.appendChild(img);
                box.appendChild(p);
                box.append(url);
                box.appendChild(publishedAt);
                unterhaltungNews.appendChild(box);
            }
        },
        error: function () {
            unterhaltungNews.innerHTML = "Es konnten keine News geladen werden!";
        }
    });