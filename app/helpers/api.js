var axios = require('axios');
var apiConfig = require('../env/openWeatherMapKey');
var apikey = apiConfig.key;

function getCurrentWeather(city) {
	return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&type=accurate&APPID=' + apikey)
}

var weatherHelper = {
  getCurrentWeather: function(city) {
    return getCurrentWeather(city)
			.catch(function(err) {console.warn('Error in getCurrentWeather: ', err)});
  }
};

module.exports = weatherHelper;
