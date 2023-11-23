const suche = document.getElementById("suche");
const source = document.getElementById("source");
const date = document.getElementById("date");
const stichwort = document.getElementById("stichwort");
const submit = document.getElementById("submit");
const img = document.getElementById("img");
const json = document.getElementById("json");
const publishedAt = document.getElementById("publishedAt");

submit.addEventListener("click", function () {
    $.ajax({
        url: "https://newsapi.org/v2/everything?q=" + stichwort.value + "&from=" + date.value + "&sources=" + source.value + "&sortBy=publishedAt&apiKey=d6c732c05edd4696add8f5066bc1e422",
        type: 'GET',
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        success: function (data) {
            suche.innerHTML = "";
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
                suche.appendChild(box);
            }
        },
        error: function () {
            json.innerHTML = "Fehler beim Suchen";
        }
    });

});