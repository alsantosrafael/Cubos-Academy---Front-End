
//Questão 01
const btn = document.querySelector(".btn");
const paragrafo = document.querySelector("p")

const pegaAPI = () => {
    fetch("https://programming-quotes-api.herokuapp.com/quotes/random/lang/en")
    .then((resposta) => {
            return resposta.json()
    }).then((respostaJson) => {
        paragrafo.innerText = `"${respostaJson.en}"` + ' - ' + `${respostaJson.author}`

    })
}

btn.addEventListener('click', () => {
    const promessaVazia = (tempo) => {
        const promessa = new Promise ((resolve) => {
            setTimeout(() => {
                resolve(pegaAPI())
            }, tempo)
        })
    }
    promessaVazia(500)
})


//Questão 02

const promessa = new Promise(resolve => {
    setTimeout(() => {
        resolve(alert("Resolvido!"))
    }, 1000)
})

//Questão 03
const promessaVazia = (tempo) => {
    const promessa = new Promise ((resolve) => {
        setTimeout(() => {
            resolve()
        }, tempo)
    })
}

promessaVazia(1000)



