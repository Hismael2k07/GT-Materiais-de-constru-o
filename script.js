// =========================
// PRODUTOS DA GT
// =========================

let produtos = JSON.parse(
localStorage.getItem("produtosGT")
) || [


];

// =========================
// CARRINHO
// =========================

let carrinho = [];

// =========================
// MOSTRAR PRODUTOS
// =========================

function mostrarProdutos(lista) {

    const container =
    document.getElementById("listaProdutos");

    container.innerHTML = "";

    lista.forEach(produto => {

        container.innerHTML += `
        <div class="produto">

            <img src="${produto.imagem}"
            alt="${produto.nome}">

            <div class="produto-info">

               <h3>${produto.nome}</h3>

                <p>${produto.descricao || ""}</p>

                <p>${produto.preco}</p>

                <button onclick="adicionarCarrinho('${produto.nome}')">
                    Adicionar ao orçamento
                </button>

            </div>

        </div>
        `;
    });

}

// =========================
// FILTRO
// =========================

function filtrar(categoria){

    if(categoria === "todos"){
        mostrarProdutos(produtos);
        return;
    }

    const filtrados =
    produtos.filter(produto =>
    produto.categoria === categoria);

    mostrarProdutos(filtrados);
}

// =========================
// PESQUISA
// =========================

function pesquisarProdutos(){

    const termo =
    document.getElementById("pesquisa")
    .value
    .toLowerCase();

    const resultado =
    produtos.filter(produto =>
    produto.nome.toLowerCase().includes(termo));

    mostrarProdutos(resultado);
}

// =========================
// CARRINHO
// =========================

function adicionarCarrinho(nome){

    carrinho.push(nome);

    atualizarCarrinho();

    alert(nome + " adicionado ao orçamento!");
}

function atualizarCarrinho(){

    const lista =
    document.getElementById("itensCarrinho");

    const contador =
    document.getElementById("contador");

    lista.innerHTML = "";

    carrinho.forEach(item => {

        const li =
        document.createElement("li");

        li.textContent = item;

        lista.appendChild(li);

    });

    contador.textContent =
    carrinho.length;
}

// =========================
// WHATSAPP
// =========================

function enviarWhatsApp(){

    if(carrinho.length === 0){

        alert("Adicione produtos primeiro!");

        return;
    }

    let mensagem =
    "Olá, gostaria de um orçamento:%0A%0A";

    carrinho.forEach(item => {

        mensagem += "• " + item + "%0A";

    });

    const numero =
    "554931911788";

    const link =
    `https://wa.me/${numero}?text=${mensagem}`;

    window.open(link, "_blank");
}

// =========================
// MODO ESCURO
// =========================

document
.getElementById("darkMode")
.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});

// =========================
// INICIAR SITE
// =========================

mostrarProdutos(produtos);

function toggleCarrinho() {

    const carrinho =
    document.querySelector(".carrinho");

    carrinho.classList.toggle("aberto");

}
