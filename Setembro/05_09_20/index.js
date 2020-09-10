//Questão 01
//Peguei o botao
const btn = document.querySelector("button");

//Preciso que a promessa seja resolvida quando eu clicar no botão
//então eu crio uma promessa, e devo acionar resolve quando
//o botão for clicado
//Assim, coloco o ouvidor de evento dentro da promessa e chamo o resolve.
//Para confirmar que a promessa foi resolvida
//coloquei um alert ali embaixo
const promessa = new Promise((resolve) => {
    btn.addEventListener("click", () => {
        resolve()
    })
});

promessa.then(() => alert("Promessa resolvida, pois o botão foi clicado."))
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
//Questão 02