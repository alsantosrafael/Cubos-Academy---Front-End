const span = document.querySelector('.cidade')
const ultimo = document.querySelector('.ultimo')
const historico = document.querySelector('.historico')

//função que realiza fetch e retorna JSON
const fetchJson = (url) => {
    return fetch(url).then(resposta => resposta.json())
}

const converteData = (data) => {
    let novaData = data.split("-").reverse().join('/')
    return novaData
}

fetchJson("https://extreme-ip-lookup.com/json/")
    .then(respostaJson => {
        const cidade = respostaJson.city
        const estado = respostaJson.region

        console.log(cidade)
        span.innerText = `${cidade}, ${estado}`

        //Pare realizar um encadeamento de promessas, posso retornar uma promessa
        //de dentro de um then. Assim:
        const estadoSigla = {
            "Acre": "AC",
            "Alagoas": "AL",
            "Amapá": "AP",
            "Amazonas": "AM",
            "Bahia": "BA",
            "Ceará": "CE",
            "Distrito Federal": "DF",
            "Espírito Santo": "ES",
            "Goiás": "GO",
            "Maranhão": "MA",
            "Mato Grosso": "MT",
            "Mato Grosso do Sul": "MS",
            "Minas Gerais": "MG",
            "Pará": "PA",
            "Paraíba": "PB",
            "Paraná": "PR",
            "Pernambuco": "PE",
            "Piauí": "PI",
            "Rio de Janeiro": "RJ",
            "Rio Grande do Norte": "RN",
            "Rio Grande do Sul": "RS",
            "Rondônia": "RO",
            "Roraima": "RR",
            "Santa Catarina": "SC",
            "São Paulo": "SP",
            "Sergipe": "SE",
            "Tocantins": "TO"
        };
        //Tô acessando a propriedade 
        const siglaEstado = estadoSigla[estado];
         return fetchJson(`https://brasil.io/api/dataset/covid19/caso/data/?format=json&place_type=state&state=${siglaEstado}`)
    })
    .then(respostaJson => {
        ultimo.innerText = respostaJson.results[0].confirmed
        for(const resultado of respostaJson.results) {
            const li = document.createElement("li")

            const data = document.createElement("div")
            data.classList.add("dia")
            data.innerText = converteData(resultado.date);

            const casos = document.createElement("div")
            casos.classList.add("casos")
            casos.innerText = resultado.confirmed;
            
            li.append(data)
            li.append(casos)
            historico.append(li)
        }
    })