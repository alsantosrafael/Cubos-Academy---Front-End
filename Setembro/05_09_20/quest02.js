//Precisamos pegar os elementos que vamos modificar
//Precisamos inserir novos elementos na div historico
const elementoCidade = document.querySelector(".cidade")
const elementoUltimo = document.querySelector(".ultimo")
const elementoHistorico = document.querySelector(".historico")

const estadoSigla = {
    "Acre": "AC",
    "Alagoas": "AL",
    "Amapa": "AP",
    "Amazonas": "AM",
    "Bahia": "BA",
    "Ceara": "CE",
    "Distrito Federal": "DF",
    "Espirito Santo": "ES",
    "Goias": "GO",
    "Maranhao": "MA",
    "Mato Grosso": "MT",
    "Mato Grosso do Sul": "MS",
    "Minas Gerais": "MG",
    "Para": "PA",
    "Paraiba": "PB",
    "Parana": "PR",
    "Pernambuco": "PE",
    "Piaui": "PI",
    "Rio de Janeiro": "RJ",
    "Rio Grande do Norte": "RN",
    "Rio Grande do Sul": "RS",
    "Rondonia": "RO",
    "Roraima": "RR",
    "Santa Catarina": "SC",
    "Sao Paulo": "SP",
    "Sergipe": "SE",
    "Tocantins": "TO"
};
//Criei uma função para retornar o Json da API
const fetchJson = (url) => {
    return fetch(url).then(resposta => resposta.json())
}

//Precisamos pegar a API do IP agora
fetchJson("https://extreme-ip-lookup.com/json/")
    .then(respostaJson => {
        const cidade = respostaJson.city;
        const estado = respostaJson.region;
        
        const sigla = estadoSigla[estado]
        elementoCidade.innerText = `${cidade}, ${estado}`
        //Para encadear promesas, eu retorno uma promessa
        return fetchJson(`https://brasil.io/api/dataset/covid19/caso/data/?format=json&city=${cidade}&state=${sigla}`)
    })
    .then(respostaJson => {
        
        
        //elementoUltimo.innerText = respostaJson
        
        for(const resultado of respostaJson.results) {
            const li = document.createElement("li")
            
            const data = resultado.date.split("-").reverse().join("/")

            const elementoData = document.createElement("div")
            elementoCidade.classList.add("data")
            elementoData.innerText = resultado.date

            const elementoCasos = document.createElement("div")
            elementoCasos.classList.add("casos");
            
            elementoCasos.innerText.innerText = resultado.confirmed;
            li.append(elementoData)
            li.append(elementoCasos)
            elementoHistorico.append(li)
        }

    })