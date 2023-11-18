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
            json.innerHTML = data.articles[0].description;
            img.src = data.articles[0].urlToImage;
            publishedAt.innerHTML = "Published at: " + new Date(data.articles[0].publishedAt).toLocaleString();;
            source.innerHTML = data.articles[0].source;
        },
        error: function () {
            json.innerHTML = "Fehler beim Suchen";
        }
    });
});