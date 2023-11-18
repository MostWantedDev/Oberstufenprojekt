const politikButton = document.getElementById("politikButton");
const politikNews = document.getElementById("politikNews");


    $.ajax({
        url: "https://newsapi.org/v2/everything?q=Politik&sortBy-popularity&apikey=d6c732c05edd4696add8f5066bc1e422",
        type: 'GET',
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        success: function (data) {
            politikNews.innerHTML = "";
            for (let i = 0; i < data.totalResults; i++) {
                var box = document.createElement("div");
                
                var p = document.createElement("p");
                p.innerHTML = data.articles[i].description;
                
                var img = document.createElement("img");
                img.src = data.articles[i].urlToImage;
                
                box.appendChild(p);
                box.appendChild(img);
                politikNews.appendChild(box);
                }
        },
        error: function () {
            politikNews.innerHTML = "Es konnten keine News geladen werden!";
        }
    });