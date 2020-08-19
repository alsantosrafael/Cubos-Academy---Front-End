
const btn = document.querySelector("button");
const seletor = document.querySelector("#seletor")
const resetar = document.querySelectorAll('*')

btn.addEventListener('click', () => {
    let seletorEscolhido = seletor.value;
    let selecionando = document.querySelectorAll(seletorEscolhido);

    //Limpando o estado anterior
    for(let i = 0; i < resetar.length; i++){
        resetar[i].style['border'] = ""
    }
    //adicionando novo estilo
    for(let i = 0; i < selecionando.length; i++){
        if(selecionando[i].hasAttribute('style')){
            selecionando[i].removeAttribute('style');
        } else{
            selecionando[i].style['border'] = 'red solid 2px';
        
        }
    }

})  