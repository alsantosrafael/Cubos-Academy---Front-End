//Construindo Objetos para quantidades médias
const adulto = {
    consumoMedioCarne: 600, //Gramas
    consumoMedioQueijo: 400, //Gramas
    consumoMedioPaoDeAlho: 0.5, //Pacote
    consumoMedioCerveja: 1, //Litros
    consumoMedioRefrigerante: 0.5 //Litros
}

const crianca = {
    consumoMedioCarne: 300, //Gramas
    consumoMedioQueijo: 200, //Gramas
    consumoMedioPaoDeAlho: 0.25, //Pacote
    consumoMedioDeSobremesa: 400, //Gramas
    consumoMedioRefrigerante: 0.6 //Litros
}

// Manipulação da DOM
//Obtendo elementos do HTML

const btn = document.querySelector('.btn');
const quantAdultos = document.querySelector('#adults');
const quantCriancas = document.querySelector('#kids');
const vetorVariaveis = document.querySelectorAll('.quant > span')
const escolhaCerveja = document.querySelector('select');

btn.addEventListener('click', () => {
    //Iniciando variaveis que entrarão no HTML
    let carne, queijo, paoDeAlho, sobremesa, cerveja, tipoCerveja, refri = 0;


    if(quantAdultos === 0 && quantCriancas === 0){
        console.log('Não tem churrasco se não tem gente... Tente novamente!')
    } else{
        //Atribuindo valores às variáveis
        carne = adulto.consumoMedioCarne * quantAdultos.valueAsNumber + crianca.consumoMedioCarne * quantCriancas.valueAsNumber;
        queijo = adulto.consumoMedioQueijo * quantAdultos.valueAsNumber + crianca.consumoMedioQueijo * quantCriancas.valueAsNumber;
        paoDeAlho = adulto.consumoMedioPaoDeAlho* quantAdultos.valueAsNumber + crianca.consumoMedioPaoDeAlho * quantCriancas.valueAsNumber;
        sobremesa = quantCriancas.valueAsNumber * crianca.consumoMedioDeSobremesa;
        cerveja = adulto.consumoMedioCerveja * quantAdultos.valueAsNumber;
        refri = adulto.consumoMedioRefrigerante * quantAdultos.valueAsNumber + crianca.consumoMedioRefrigerante * quantCriancas.valueAsNumber;
        
        //Alterando Span dentro do HTML
        vetorVariaveis[0].innerHTML = `${carne}`;
        vetorVariaveis[1].innerHTML = `${queijo}`;
        vetorVariaveis[2].innerHTML = `${Math.round(paoDeAlho)}`;
        vetorVariaveis[3].innerHTML = `${sobremesa}`;

        if(escolhaCerveja.value === 'garrafa600ml'){
            tipoCerveja = 0.6;
            vetorVariaveis[4].innerHTML = `${Math.round(cerveja/tipoCerveja)} garrafa(s)`;
        } else if(escolhaCerveja.value === 'latao475ml'){
            tipoCerveja = 0.475;
            vetorVariaveis[4].innerHTML = `${Math.round(cerveja/tipoCerveja)} latão/latões`;
        } else if(escolhaCerveja.value === 'longneck300ml'){
            tipoCerveja = 0.3;
            vetorVariaveis[4].innerHTML = `${Math.round(cerveja/tipoCerveja)} longneck(s)`;
        } else if(escolhaCerveja.value === 'lata350ml'){
            tipoCerveja = 0.35;
            vetorVariaveis[4].innerHTML = `${Math.round(cerveja/tipoCerveja)} lata(s)`;
        } else if(escolhaCerveja.value === 'latinha269ml'){
            tipoCerveja = 0.269;
            vetorVariaveis[4].innerHTML = `${Math.round(cerveja/tipoCerveja)} latinha(s)`;
        }
        vetorVariaveis[5].innerHTML = `${Math.round(refri)}`
    }

})


