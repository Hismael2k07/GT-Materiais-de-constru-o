// =========================
// PRODUTOS DA GT
// =========================

let produtos = JSON.parse(
localStorage.getItem("produtosGT")
) || [

{
    nome: "Cimento Votoran",
    categoria: "todos",
    preco: "R$ 61,89",
    imagem: "https://media.falabella.com/sodimacBR/636907_1/public"
},

{
    nome: "Calefator Bracelona",
    categoria: "promocoes",
    preco: "R$ 6.192,00",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRozJvfE0z2hPiTRzy0gcBHqES3HOBfh5gZQYzE69J4wArSC-eCAIkpF6s&s=10"
},

{
    nome: "Aquecedor nilko",
    categoria: "promocoes",
    preco: "R$ 245,90",
    imagem: "https://images.tcdn.com.br/img/img_prod/1161591/aquecedor_e_desumidificador_nilko_7_1_358cd5ffc1addf0715b18fda0a62daf3.png"
},

{
    nome: "Torneira luna",
     categoria: "hidraulica",
     categoria: "promocoes",  
     preco: "R$ 177,80",
    imagem: "https://cdagua.vtexassets.com/arquivos/ids/206475/Torneira-Zagonel-Luna-Parede-Eletrica-Branca-5500-W.jpg?v=638757551481300000"
},

{
    nome: "Tinta esmalte renner branca",
    categoria: "tintas",
    preco: "R$ 109,90",
    imagem: "https://www.plamacol.com.br/wp-content/uploads/2026/01/img_43117_1.webp"
},

{
    nome: "Martelo Profissional",
    categoria: "ferramentas",
    preco: "R$ 45,90",
    imagem: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600"
},

{
    nome: "Parafusadeira",
    categoria: "ferramentas",
    preco: "R$ 299,90",
    imagem: "https://images.unsplash.com/photo-1581147036324-c1c3d7b8f9d1?w=600"
},

{
    nome: "Fechadura Externa",
    categoria: "ferragens",
    preco: "R$ 59,90",
    imagem: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600"
},

{
    nome: "Dobradiça 3 Polegadas",
    categoria: "ferragens",
    preco: "R$ 12,90",
    imagem: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=600"
},

{
    nome: "Tinta Acrílica Branca",
    categoria: "tintas",
    preco: "R$ 189,90",
    imagem: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600"
}

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