const apiKey = "57b6e9a6c39ce98e3b7461e9933ebd57";  // Your OpenWeatherMap API key
let chart;

// Fetch current weather + forecast
async function getWeather() {
  const city = document.getElementById("cityInput").value || "Pune"; // default city
  try {
    // Current weather
    const weatherRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    const weatherData = await weatherRes.json();

    document.getElementById("cityName").innerText = `City: ${weatherData.name}`;
    document.getElementById("temperature").innerText = `Temperature: ${weatherData.main.temp} °C`;
    document.getElementById("humidity").innerText = `Humidity: ${weatherData.main.humidity} %`;
    document.getElementById("wind").innerText = `Wind Speed: ${weatherData.wind.speed} m/s`;

    // 5-day forecast (3-hour interval)
    const forecastRes = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
    );
    const forecastData = await forecastRes.json();

    // Take next 8 data points (24 hours)
    const labels = forecastData.list.slice(0, 8).map(item =>
      new Date(item.dt_txt).getHours() + ":00"
    );
    const temps = forecastData.list.slice(0, 8).map(item => item.main.temp);

    renderChart(labels, temps);
  } catch (error) {
    alert("City not found or API error!");
    console.error(error);
  }
}

// Render temperature chart
function renderChart(labels, temps) {
  const ctx = document.getElementById("tempChart").getContext("2d");
  if (chart) chart.destroy(); // Clear old chart

  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [{
        label: "Temperature (°C)",
        data: temps,
        borderColor: "blue",
        backgroundColor: "rgba(0, 123, 255, 0.3)",
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true }
      }
    }
  });
}