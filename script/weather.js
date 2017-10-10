
// Update Function !

$(document).ready(function() {  
  getWeather(); //Get the initial weather.
  setInterval(getWeather, 60000); //Update the weather every 10 minutes.
});

// Get Weather

function getWeather() {
   $.simpleWeather({
       location: 'abenra, DK',
    woeid: '',
    unit: 'c', 
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}
