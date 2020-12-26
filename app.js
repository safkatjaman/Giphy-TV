/* Do some stuff with the API */
function searchGIPHY(searchQuery) {
      var apiURL = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=" + searchQuery;

      var GIPHYtvAJAXCall = new XMLHttpRequest();
      GIPHYtvAJAXCall.open('GET' , apiURL);
      GIPHYtvAJAXCall.addEventListener('load', function(data) {
            var data2 = data.target.response;

            pushToDOM(data2);
      });
      GIPHYtvAJAXCall.send();
}
searchGIPHY(prompt("Enter a GIF name to watch it on Giphy TV"));

function pushToDOM(response) {
      var response = JSON.parse(response);
      var images = response.data;
      var container = document.querySelector('.js-go');
      container.innerHTML = "";

      for (i = 0; i < 40; i++) {
            setTimeout(function() {
                  var src = images[i].images.fixed_height.url;
                  container.innerHTML = "";
                  container.innerHTML += `<img class='image-css' src=  ${src} >`;
                  i++;
            }, 5000 * i);
      }
}