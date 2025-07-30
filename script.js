// ✅ Use quotes for the API key
const apiKey = "1ec4dea3dcb2b69cd0661ea2214223c1";

document.getElementById("searchBtn").addEventListener("click", function () {
  const city = document.getElementById("city").value;
  if (city) {
    getWeather(city);
  } else {
    alert("Please enter a city name");
  }
});

function getWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => displayWeather(data))
    .catch(error => alert(error.message));
}

function displayWeather(data) {
  const weatherDiv = document.getElementById("weather");
  weatherDiv.innerHTML = `
    <h3>${data.name}, ${data.sys.country}</h3>
    <p>Temperature: ${data.main.temp} °C</p>
    <p>Weather: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
  `;
}
