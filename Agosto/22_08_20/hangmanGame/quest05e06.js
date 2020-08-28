function gerarNumeroInteiroAleatorio(min, max) {
	// número fracionário aleatório maior ou igual a 0 e menor que 1
	const aleatorioDeBase = Math.random();
	// número fracionário aleatório maior ou igual a 0 e menor que (max - min + 1)
	const aleatorioFracionario = Math.random() * (max - min + 1);
	// número inteiro aleatório maior ou igual a 0 e menor ou igual a (max - min)
	// Math.trunc tira a parte fracionária de um número: 0,5 vira 0, 1,25 vira 1, etc
	const aleatorioInteiro = Math.trunc(aleatorioFracionario);
	// número inteiro aleatório maior ou igual a min e menor ou igual a max
	return min + aleatorioInteiro;
}

function escolherElementoAleatorio(array) {
	return array[gerarNumeroInteiroAleatorio(0, array.length - 1)]
}

//Início do jogo
//array de palavras. Uma delas será sorteada
const palavras = ["pular", "muro", "celular", "varal"]
//Sorteando uma palavra aleatória
const palavraSorteada = escolherElementoAleatorio(palavras);
const elementoLetras = document.querySelector(".letras");
const botoes = document.querySelectorAll(".botoes button");
let quantErros = 0;
let quantAcertos = 0;
const partesDoCorpo = document.querySelectorAll(".corpo *"); //Pegando todos os filhos da classe corpo

//Ocultando as partes do corpo
for (const parteDoCorpo of partesDoCorpo) {
    parteDoCorpo.setAttribute("hidden", "") //escondendo
}

//Montando os tracinhos da palavra sorteada
for (let i = 0; i < palavraSorteada.length; i++){
    //adicionando underlines
    const elementoLetra = document.createElement("span")
    elementoLetra.classList.add("letra");

    elementoLetras.append(elementoLetra)
}

//durante o jogo
//Adicionando ouvinte de eventos em todos os elementos

for(const botao of botoes) {
    botao.addEventListener("click", (event) => {
        const botaoClicado = event.target; //para saber em meio a tantos botoes com o mesmo ouvinte qual de fato eu cliquei!
        const letra = botaoClicado.innerText;
        botaoClicado.setAttribute("disabled", "")

        if(palavraSorteada.includes(letra)) {
            const elementosLetra = document.querySelectorAll(".letras *")
            for (let i = 0; i < palavraSorteada.length; i++) {
                if(palavraSorteada[i] === letra) {
                    elementosLetra[i].innerText = letra;
                    quantAcertos++
                }
            }
            if (quantAcertos === palavraSorteada.length) {
                alert('Ganhou!')
            }
        } else {
            partesDoCorpo[quantErros].removeAttribute("hidden")
            quantErros++;
            if(quantErros === 6) {
                alert("Perdeu!")
            }

        }

    })
}

// document.addEventListener("keypress", event => {
//     const letra = event.key;

// })


