const senha = document.querySelector('#senha');
const btn = document.querySelector(".btn");


btn.addEventListener("click", () => {
    if(btn.innerText === 'Revelar a senha') {
        btn.innerText = 'Esconder a senha';
        senha.type = "text"
    } else if(btn.innerText = 'Esconder a senha') {
        btn.innerText === 'Revelar a senha'
        senha.type = "password"
    }
})

senha.addEventListener("focus", () => {
    senha.type = "text";

})
senha.addEventListener("blur", () => {
    senha.type = "password";

})