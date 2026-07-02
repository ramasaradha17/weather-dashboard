const apiKey = "YOUR_API_KEY";

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
    const city = document.getElementById("city").value.trim();

    if(city !== ""){
        getWeather(city);
    }
});

async function getWeather(city){

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{

        const response = await fetch(url);

        if(!response.ok){
            throw new Error("City not found");
        }

        const data = await response.json();

        displayWeather(data);

        document.getElementById("error").textContent="";

    }

    catch(error){

        document.getElementById("error").textContent =
        error.message;

        document.getElementById("weatherCard").style.display="none";
    }

}

function displayWeather(data){

    document.getElementById("weatherCard").style.display="block";

    document.getElementById("cityName").textContent =
    `${data.name}, ${data.sys.country}`;

    document.getElementById("temp").textContent =
    `${data.main.temp} °C`;

    document.getElementById("humidity").textContent =
    `${data.main.humidity}%`;

    document.getElementById("wind").textContent =
    `${data.wind.speed} m/s`;

    document.getElementById("description").textContent =
    data.weather[0].description;
}