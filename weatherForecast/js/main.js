let apiKey = "03c0e61984b9ac2e9622561fc03a9806";
let search = document.getElementById("city")
let form = document.getElementById("form")
let main = document.getElementById("main")
let temp;

const url = (city) => 
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;


async function getweather(city) {
    const resp = await fetch(url(city), {origin: "cors"});
    const respData = await resp.json();
    console.log(respData);
    temp = respData.main.temp;
    temp = Math.floor(temp - 273.15)
    console.log(temp);
    let weather = document.createElement("div")
    weather.classList.add("weather");
    weather.innerHTML = `
        <h1>${city.toUpperCase()}</h1>
        <h2>Temperature: ${temp}<sup>o</sup>C</h2>
        <small>${respData.weather[0].main}</small>

        <br/>
        <bold>Humidity: ${respData.main.humidity}</bold>
    `
   main.innerHTML = ""
    main.appendChild(weather);
}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const city = search.value;
    // if (city) {
    //     getweather(city);
    // }
    // else {
    //     main.innerHTML = "Sorry, No Weather Report Is Found For This Location"
    // }
    if (true) {
        getweather(city)
    } else {
        main.innerHTML = "Sorry, No Weather Report Is Found For This Location"
    }
    
})