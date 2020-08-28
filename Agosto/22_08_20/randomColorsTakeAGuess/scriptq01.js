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

function gerarCorAleatoria() {
	const vermelho = gerarNumeroInteiroAleatorio(0, 255);
	const verde = gerarNumeroInteiroAleatorio(0, 255);
	const azul = gerarNumeroInteiroAleatorio(0, 255);
	
	return "rgb(" + vermelho + ", " + verde + ", " + azul + ")";
}

function escolherElementoAleatorio(array) {
	return array[gerarNumeroInteiroAleatorio(0, array.length - 1)]
}
//Definindo função que usa as cores aleatorias geradas e os armazena em uma lista
const gerarListaComCores = () => {
	//criando array
	let listaCores = []
	//Populando vetor com cores aleatórias
	for(let i = 0; i < 3; i++){
		listaCores.push(gerarCorAleatoria())
	}
	return listaCores;
}
//Definindo função que (re)inicia partida
const iniciar  = () => {
	arrayComCores = gerarListaComCores();
	respostaCerta = escolherElementoAleatorio(arrayComCores)
	cor.style.backgroundColor = respostaCerta
	bot1.innerText = arrayComCores[0]
    bot2.innerText = arrayComCores[1]
    bot3.innerText = arrayComCores[2]
}

//Declarando variaveis
let contagem = 0;
//Capturando elementos do HTML
const cor = document.querySelector(".box")
const bot1 = document.querySelector(".btn1")
const bot2 = document.querySelector(".btn2")
const bot3 = document.querySelector(".btn3")
//Gero vetor com cores e armazeno-o
let arrayComCores = gerarListaComCores();
//Pego uma das cores do vetor aleatoriamente
let respostaCerta = escolherElementoAleatorio(arrayComCores)

console.log(arrayComCores, respostaCerta)

bot1.addEventListener("click", () => {
	if(bot1.innerText === respostaCerta){
		alert('Legal! Você acertou!')
		contagem++;
		if(contagem === 10) {
			alert('CÊ TÁ ON FIRE! ACERTOU 10 vezes!')
			contagem = 0;
		}
		iniciar()
	} else {
		alert('ERRRRRROUUUU! Tente novamente!')
		contagem = 0;
	}

 })

 bot2.addEventListener("click", () => {
	if(bot2.innerText === respostaCerta){
		alert('Legal! Você acertou!')
		contagem++;
		if(contagem === 10) {
			alert('CÊ TÁ ON FIRE! ACERTOU 10 vezes!')
			contagem = 0;
		}
		iniciar()
	} else {
		alert('ERRRRRROUUUU! Tente novamente!')
		contagem = 0;
	}

 })

 bot3.addEventListener("click", () => {
	if(bot3.innerText === respostaCerta){
		alert('Legal! Você acertou!')
		contagem++;
		if(contagem === 10) {
			alert('CÊ TÁ ON FIRE! ACERTOU 10 vezes!')
			contagem = 0;
		}
		iniciar()
	} else {
		alert('ERRRRRROUUUU! Tente novamente!')
		contagem = 0;
	}

 })

iniciar()