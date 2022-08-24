//CONSTANTES E VARIÁVEIS
const btnAvancar = document.getElementById("btn-avancar");//CONSTANTE RECEBE O ID DO BOTÃO QUE SE DEVE CLICAR PARA AVANÇAR
const btnVoltar = document.getElementById("btn-voltar");//CONSTANTE RECEBE O ID DO BOTÃO QUE SE DEVE CLICAR PARA VOLTAR
const cartoes = document.querySelectorAll(".cartao");//CONSTANTE RECEBE A CLASSE REFERENTE AOS CARTÕES(ESSA CLASE ESTÁ EM TODAS AS <li>'s) 
let cartaoAtual = 0;//VARIÁVEL RECEBE POSIÇÃO 0

/*
POSIÇÃO DE CADA PERSONAGEM
NARUTO = POSIÇÃO 0
HINATA = POSIÇÃO 1
BORUTO = POSIÇÃO 2
TOTAL DE POSIÇÕES(COMPRIMENTO) = 3
*/

//FUNÇÕES
function esconderCartaoSelecionado() {//REMOVENDO A CLASSE SELECIONADO DO CARTÃO
    const cartaoSelecionado = document.querySelector(".selecionado");//CONSTANTE PEGA A CLASSE selecionado QUE É RESPONSÁVEL POR EXIBIR O CARTÃO 
    cartaoSelecionado.classList.remove("selecionado");//CONSTANTE LISTA TODAS AS CLASSES E REMOVE A CLASSE selecionado
}

function mostrarCartao(indiceCartao) {//ADICIONANDO A CLASSE SELECIONADO AO CARTÃO
    cartoes[indiceCartao].classList.add("selecionado");//ENTRA NOS CARTÕES, LISTA TODAS AS CLASSES E ADICIONA A CLASSE selecionado
}

//APLICANDO FUNÇÃO NA SETA AVANÇAR
btnAvancar.addEventListener("click", function () {//BOTÃO AVANÇAR COM UM EVENTO DE CLICK IRÁ CHAMAR UMA FUNÇÃO
    esconderCartaoSelecionado();//FUNÇÃO PARA ESCONDER O CARTÃO ATUAL

    cartaoAtual++;//CARTÃO ATUAL QUE TINHA POSIÇÃO 0 RECEBE +1, OU SEJA, MAIS UMA POSIÇÃO, QUE NO CASO É A PRÓXIMA

    if (cartaoAtual >= cartoes.length) {//E SE O CARTÃO ATUAL FOR MAIOR OU IGUAL AO TAMANHO DO COMPRIMENTO DOS CARTÕES
    cartaoAtual = 0;//CARTÃO ATUAL IRÁ VOLTAR PARA A POSIÇÃO 0
    }

    mostrarCartao(cartaoAtual);//FUNÇÃO DE MOSTRAR O CARTÃO COM UM PARÂMETRO DE MOSTRAR O CARTÃO ATUAL
});

//APLICANDO FUNÇÃO NA SETA VOLTAR
btnVoltar.addEventListener("click", function () {//BOTÃO VOLTAR COM UM EVENTO DE CLICK IRÁ CHAMAR UMA FUNÇÃO
    if (cartaoAtual === 0) {//E SE O CARTÃO ATUAL FOR IDÊNTICO A POSIÇÃO 0
    cartaoAtual = cartoes.length;//CARTÃO ATUAL RECEBE O COMPRIMENTO DOS CARTÕES, QUE NO CASO É A POSIÇÃO 3
    }

    esconderCartaoSelecionado();//FUNÇÃO PARA ESCONDER O CARTÃO ATUAL

    cartaoAtual--;//CARTÃO ATUAL QUE TINHA POSIÇÃO 0 RECEBE -1, OU SEJA, MENOS UMA POSIÇÃO, QUE NO CASO É A ANTERIOR
    mostrarCartao(cartaoAtual);//FUNÇÃO DE MOSTRAR O CARTÃO COM UM PARÂMETRO DE MOSTRAR O CARTÃO ATUAL
});
