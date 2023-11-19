const source = document.getElementById("source");
const date = document.getElementById("date");
const stichwort = document.getElementById("stichwort");
const submit = document.getElementById("submit");
const img = document.getElementById("img");
const json = document.getElementById("json");
const publishedAt = document.getElementById("publishedAt");

submit.addEventListener("click", function () {
    $.ajax({
        url: "https://newsapi.org/v2/everything?q=" + stichwort.value + "&from=" + date.value + "&sources=" + source.value + "&sortBy=popularity&apiKey=d6c732c05edd4696add8f5066bc1e422",
        type: 'GET',
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        success: function (data) {
            json.innerHTML = "";
            for (let i = 0; i < data.totalResults; i++) {
                var box = document.createElement("div");
                
                var p = document.createElement("p");
                p.innerHTML = data.articles[i].description;
                
                var img = document.createElement("img");
                img.src = data.articles[i].urlToImage;
                
                box.appendChild(p);
                box.appendChild(img);
                topNews.appendChild(box);
                }
        },
        error: function () {
            json.innerHTML = "Fehler beim Suchen";
        }
    });

});