//Declarando funções para gerar números aleatóros
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

const testaResultado = (evento) => {
	let cor
	console.log(botoes)
	if(acertos === 10){
		alert('Parabéns! Vocês acertou 10 vezes!')
		acertos = 0;
	}
	if(cor === respostaCerta){
		alert('Acertou!')
		atualizaBotoes()
		acertos++;
	} else{
		alert('Errrrrrou!')
	}

}

const atualizaBotoes = () => {	
	
	corResposta = div.style["background-color"] = gerarCorAleatoria().toString()
	respostaCerta = gerarNumeroInteiroAleatorio(0, 2)
	console.log(respostaCerta)
	for(let i = 0; i < botoes.length; i++){
		if(i === respostaCerta){
			botoes[i].innerText = corResposta.toString()
		} else{
			botoes[i].innerText = gerarCorAleatoria().toString()
		}
	}

}

// Pegando elementos da DOM
const div = document.querySelector(".box");
const bot1= document.querySelector(".btn1");
const bot2= document.querySelector(".btn2");
const bot3= document.querySelector(".btn3")
const botoes = document.querySelectorAll(".btn");
let acertos = 0;
//Gerando cor aleatória para a div
let corResposta

//Atribuindo cores em string para os conteúdos dos botões
let respostaCerta 
//console.log(respostaCerta);
botoes.forEach((botao) => {
	botao.addEventListener('click', testaResultado)

})


atualizaBotoes();
