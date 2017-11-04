/* ---declaring my variables--- */
var quote;
var icon;



   /* API request */
   function updateByChoice() {
     var input1 = $("#search1").val();
    var url = "http://sandipbgt.com/theastrologer/api/horoscope/" + input1 + "/today/?";
        sendRequest(url);

   }



   window.onload = function () {
          quote = document.getElementById('quote');
          icon = document.getElementById('icon');
     };



   /* inner the weather API  json information into the variable declared above */
   function update(zodiac) {
     quote.innerHTML = zodiac.quote;
     icon.innerHTML =  '<img height="300" src = "img/' + zodiac.sign + '.png">';
   }

/* ----AJAX request using jQuery---- */
function sendRequest(url) {
  $.getJSON( url, function adinfo (data) {

                  var zodiac = {};
                  zodiac.quote = data.horoscope;
                  zodiac.sign = data.sunsign.toLowerCase();;
                  update(zodiac);
              });
          }
