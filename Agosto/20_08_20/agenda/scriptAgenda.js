const form = document.querySelector("form");
const input = document.querySelector("form input")
const toDo = document.querySelector(".toDo")
const done = document.querySelector(".done")


function deletaTarefa(evento) {
    const botaoDeletar = evento.target;
    const tarefa = botaoDeletar.closest("li");
    tarefa.remove();
}

function marcaTarefaComoFeita(evento) {
    const checkBox = evento.target;
    const tarefa = checkBox.closest("li");

    if(checkBox.checked){
        done.append(tarefa);
    } else{
        toDo.append(tarefa)
    }
}

form.addEventListener("submit", event => {
    event.preventDefault();//Evitando que a página seja recarregada

    const tarefa = document.createElement("li");//Criei um elemento no JS

    const checkBox = document.createElement("input");//criei input
    checkBox.setAttribute("type", "checkbox")//setei input para checkbox

    const botaoDeletar = document.createElement("button");
    botaoDeletar.innerText = "Deletar";/*Configurando texto dentro do elemento */
    botaoDeletar.setAttribute("cursor", "pointer")

    botaoDeletar.addEventListener('click',deletaTarefa);
    checkBox.addEventListener('input', marcaTarefaComoFeita)

    const texto = document.createElement("span")//Criei isso só para poder alterar meu texto

    texto.innerText = input.value
    tarefa.append(checkBox);
    tarefa.append(texto); /*Texto da tarefa que digitei */
    tarefa.append(botaoDeletar);

    toDo.append(tarefa)//Colocando a tarefa no meu HTML de fato!
    input.value = ""; //Esvaizando o conteúdo do meu input após escrever a tarefa
});

