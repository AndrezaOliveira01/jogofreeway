//banco de imagens e sons

let imagemEstrada;
let imagemAtor;
let imagemCarroUm;
let imagemCarroDois;
let imagemCarroTres;

let somTrilha;
let somPonto;
let somColisao;

function preload(){
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemAtor = loadImage("imagens/ator-1.png");
  imagemCarroUm = loadImage("imagens/carro-1.png");
  imagemCarroDois = loadImage("imagens/carro-2.png");
  imagemCarroTres = loadImage("imagens/carro-3.png");
  imagemCarros = [imagemCarroUm, imagemCarroDois, imagemCarroTres, imagemCarroUm, imagemCarroDois, imagemCarroTres];
  somTrilha = loadSound("Sons/trilha.mp3");
  somPonto = loadSound("Sons/pontos.wav");
  somColisao = loadSound("Sons/colidiu.mp3")
}