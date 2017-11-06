/* ---declaring my variables--- */
var quote;
var icon;

// the windows onload function
      window.onload = function () {
          quote = document.getElementById('quote');
          icon = document.getElementById('icon');
          var search1 = document.querySelector("#search1");
     };

     /* API request */
     function updateByChoice() {
       var input1 = $("#search1").val();
      var url = "http://sandipbgt.com/theastrologer/api/horoscope/" + input1 + "/today/?";
          sendRequest(url);
          }

   /* ----AJAX request to the API using jQuery ---- */
          function sendRequest(url) {
            $.getJSON( url, function adinfo (data) {
                  var zodiac = {};
                  zodiac.quote = data.horoscope;
                  zodiac.sign = data.sunsign.toLowerCase();
                  update(zodiac);
              });
          }

   /* inner the weather API  jsonP callback information into the DOM */
   function update(zodiac) {
     quote.innerHTML = zodiac.quote;
     icon.innerHTML =  '<img height="300" src = "img/' + zodiac.sign + '.png">';
     var search1 = document.querySelector("#search1");
     search1.value = "";
   }
