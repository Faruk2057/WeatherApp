const input = document.querySelector(".city-input")
const checkBtn = document.querySelector(".searchbtn")
const temp = document.querySelector(".degree")
const cityyy = document.querySelector(".locate")
const key = 'b4b1021c98b76c78334339a8d49c0634'
const weatheer = document.querySelector('.broken')
const windyy = document.querySelector('.windspeed')
const humidityy = document.querySelector(".percent")
const pressuree = document.querySelector('.pressure')
const iconn = document.querySelector(".iconchange")
const weatherIconn = document.querySelector("#weather-icon")


async function getWeather() {
    const city = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    const res = await fetch(url);
    const data = await res.json()
    // const temp = Math.round(data.main.temp);
    console.log(data)
    
    temp.innerHTML = Math.round(data.main.temp)+ '℃';
    cityyy.innerHTML = data.name + ', ' + data.sys.country;
    weatheer.innerHTML = data.weather[0].description
    windyy.innerHTML = data.wind.speed + 'mps'
    humidityy.innerHTML = data.main.humidity + '%'
    pressuree.innerHTML = data.main.pressure
    weatherIconn.innerHTML = data.weather[0].icon

    weatherIcon.src = `http://openweathermapp.org/img/wn/${iconcode}@2x.png`;
    weatherIcon.scr = weather;

}

checkBtn.addEventListener('click', function (e) {
    e.preventDefault();
    getWeather()
})
