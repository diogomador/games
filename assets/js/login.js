function login() {
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    window.location.href = "../index.html";

    document.getElementById("usuario").value = "";
    document.getElementById("senha").value = "";
}

function register() {
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    var escolha = document.getElementById("choice").value

    window.location.href = "../login.html";

    document.getElementById("usuario").value = "";
    document.getElementById("senha").value = "";

    if (escolha === "CL") {
        console.log("Cliente selecionado");

    }

    else if (escolha === "VE") {
        console.log("Vendedor selecionado");
    }

    else {
        console.log("Escolha inválida");
    }
}

function mostrarSenha() {
    var senha = document.getElementById("senha");

    if (senha.type === "password") {
        senha.type = "text";
    } 

    else {
        senha.type = "password";
    }
}