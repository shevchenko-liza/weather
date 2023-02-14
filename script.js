"use strict"
const weatherBlock = document.querySelector('#weather')

// async function load(e) {
//     const server = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=Lviv&appid=bf82f9ce42a2b7e20225d98afa337df2'
//     const respon = await fetch(server, {
//         method: 'GET',
//     });
//     const responsive = await respon.json();
//     if (respon.ok) {
//         getWeather(responsive)
//     } else {
//         weatherBlock.innerHTML = responsive.message;
//     }
// }

function load(e) {
    fetch('https://api.openweathermap.org/data/2.5/weather?units=metric&q=Lviv&appid=bf82f9ce42a2b7e20225d98afa337df2')
        .then(res => res.json())
        .then((dataWeather) => {
            getWeather(dataWeather)
        })
}

function getWeather(data) {
    console.log(data);
    const loc = data.name
    const temp = Math.round(data.main.temp)
    const tempFeels = Math.round(data.main.feels_like)
    const photo = data.weather[0].icon
    const status = data.weather[0].main

    const tem = `
    <div class="box">
    <div>
    <div class="city"> ${loc}</div>
        <div class="status"> ${status}</div>
        <div class="temperature">Temperature:  ${temp}</div>
        <div class="feels_like"> Feels like: ${tempFeels}</div>
        </div>
        <div>
        <img class="photo" src="https://openweathermap.org/img/w/${photo}.png" />
        </div>
        </div>
        `
    weatherBlock.innerHTML = tem;
};
if (weatherBlock) {
    load()
}
// или просто load()