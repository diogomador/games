function criarConta(){
    window.location.href = "../register.html";
}

function logar(){
    window.location.href = "../login.html";
}

function sobre(){
    window.location.href = "../sobre.html";
}


let carrinho = [];

function adicionarAoCarrinho(botao) {
    if (carrinho.length >= 5) {
        alert("Você atingiu o limite de 5 itens no carrinho. Finalize a compra antes de adicionar mais produtos.");
        return;
    }

    const produto = botao.parentElement;
    const nome = produto.getAttribute("data-nome");
    const preco = parseFloat(produto.getAttribute("data-preco"));

    carrinho.push({ nome, preco });
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const listaCarrinho = document.getElementById("carrinhoLista");
    const totalValor = document.getElementById("totalValor");

    listaCarrinho.innerHTML = "";

    carrinho.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        listaCarrinho.appendChild(listItem);
    });

    const totalCarrinho = carrinho.reduce((total, item) => total + item.preco, 0);
    totalValor.textContent = totalCarrinho.toFixed(2);
}

function finalizarCompra() {
    alert("Compra finalizada! Obrigado por escolher nossos produtos.");
    carrinho = [];
    atualizarCarrinho();
}
