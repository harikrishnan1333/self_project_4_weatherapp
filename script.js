const apiKey = "YOUR_API_KEY_HERE";

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) return alert("Enter a city name");

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    document.getElementById("city").innerText = data.name;
    document.getElementById("temp").innerText = `🌡 Temperature: ${data.main.temp} °C`;
    document.getElementById("desc").innerText = `☁ Weather: ${data.weather[0].description}`;
    document.getElementById("humidity").innerText = `💧 Humidity: ${data.main.humidity}%`;
    document.getElementById("wind").innerText = `🌬 Wind Speed: ${data.wind.speed} m/s`;

  } catch (error) {
    alert(error.message);
  }
}
