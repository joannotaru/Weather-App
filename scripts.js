function getWeather() {
   const location = document.getElementById("location").value;
   const apiKey = "3b2ab0c40284fc00d429eb71c24f0df7";
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;


   fetch(url)
      .then(response => response.json())
      .then(data => {
         const { temp, feels_like } = data.main;
         const description = data.weather[0].description;
         const cityName = data.name;
         const country = data.sys.country;

         const weatherDisplay = `Current weather in ${cityName}, ${country}: ${description}, ${temp}°C (feels like ${feels_like}°C)`;

         document.getElementById("weather").textContent = weatherDisplay;


      })
      .catch(error => console.log(error));
}


