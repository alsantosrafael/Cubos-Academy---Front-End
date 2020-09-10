const span = document.querySelector("h1 span")

const dias = document.querySelectorAll(".dia")



//função do fetch
const fetchJson = (url) => {
    return fetch(url).then(resposta => resposta.json())
}

//começando a brincadeira

fetchJson("https://extreme-ip-lookup.com/json/")
    .then(respostaJson => {
        const cidade = respostaJson.city
        const estado = respostaJson.region
        const lat = respostaJson.lat;
        const lon = respostaJson.lon;
        span.innerText = `${cidade}, ${estado}`

        return fetchJson(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&lang=pt_BR&appid=47b16d41765388e1d2e251b373b570c0`)
    })
    .then(respostaJson => {
        dias.forEach((dia, index) => { 

            dia.querySelector(".minimo").innerText = respostaJson.daily[index].temp.min + '°C';
            dia.querySelector(".maximo").innerText = respostaJson.daily[index].temp.max + '°C'
            dia.querySelector(".descr").innerText = respostaJson.daily[index].weather[0].description

            let data;

            if(index === 0) {
                data = "Hoje"

            } else if (index === 1) {
                data = "Amanhã"
            } else {
                data = `Daqui a ${index} dias`
            }

            dia.querySelector(".data").innerText = data
            dia.querySelector("img").setAttribute("src", `http://openweathermap.org/img/wn/${respostaJson.daily[index].weather[0].icon}@2x.png`)

        })


    })