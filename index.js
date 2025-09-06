const leonardo = document.getElementById("leonardo");
const samantha = document.getElementById("samantha");
const bruna = document.getElementById("bruna");
const setaEsquerda = document.getElementById("seta-esquerda");
const setaDireita = document.getElementById("seta-direita");

//
function rolarParaDireita() {
  leonardo.style = "display: none;";
  bruna.style = "display: flex;";
  setaDireita.style = "display: none;";
  setaEsquerda.style = "display: flex;";
}

function rolarParaEsquerda() {
  leonardo.style = "display: flex;";
  bruna.style = "display: none;";
  setaDireita.style = "display: flex;";
  setaEsquerda.style = "display: none;";
}
