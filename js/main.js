const titulo = document.querySelector('.digitando');
const nome =document.querySelector('.nome')


function ativaNome(frase) {
    const nome = frase.innerHTML.split("");
    frase.innerHTML=''
    
    nome.forEach((elemento,i)=>{
      setTimeout(()=>{
          frase.innerHTML+=elemento;
      },85 * i );
    });
  
}
  
function ativaTexto(texto) {
  const letra = texto.innerHTML.split("");
  texto.innerHTML=''
  
  letra.forEach((elemento,i)=>{
    setTimeout(()=>{
        texto.innerHTML+=elemento;
    },85 * i );
  });
 ativaNome(nome)
}

ativaTexto(titulo)



/* ativa menu */

const ativaMenu =document.querySelector('.fa-bars')
const navMenu = document.querySelector("header .menu-primario")

ativaMenu.addEventListener('click',()=>{
  ativaMenu.classList.toggle('fa-x')
  navMenu.classList.toggle('ativado')
})







/* 
experiencia educação */

function sobreMim() {
  const divExperiencia = document.querySelectorAll(".conteudo-experiencia div");
  const liExperiencia = document.querySelectorAll(".conteudo-experiencia ul li");
  const divEducacao = document.querySelectorAll(".conteudo-educacao div");
  const liEducacao = document.querySelectorAll(".conteudo-educacao ul li");



  divEducacao[0].classList.add('ativo');
  liEducacao[0].classList.add('ativo');
  divExperiencia[0].classList.add('ativo');
  liExperiencia[0].classList.add('ativo');


  function slideShowExperiencia(index) {
    divExperiencia.forEach((div) => {
      div.classList.remove("ativo");
    });
    liExperiencia.forEach((botao) => {
      botao.classList.remove("ativo");
    });
    console.log(index)
    divExperiencia[index].classList.add('ativo');
    liExperiencia[index].classList.add('ativo');
    console.log(divExperiencia, liExperiencia);
  }

  function slideShowEducacao(index) {
    divEducacao.forEach((div) => {
      div.classList.remove("ativo");
    });
    liEducacao.forEach((botao) => {
      botao.classList.remove("ativo");
    });
   
    divEducacao[index].classList.add('ativo');
    liEducacao[index].classList.add('ativo');
  }


  liExperiencia.forEach((event, index) => {
    event.addEventListener("click", () => {
      slideShowExperiencia(index);
    });
  });

  liEducacao.forEach((event, index) => {
    event.addEventListener("click", () => {
      slideShowEducacao(index);
   
    });
  });
}
sobreMim()



/* Tipos de projetos */


function tipoProjeto() {
  const listarTodos = document.querySelectorAll(".projetos_armazenamento ul li" );
  const listaBack = document.querySelectorAll("#back-end");
  const listaFront = document.querySelectorAll("#front-end");
  const botaoProjeto = document.querySelectorAll(".modelos-projetos ul li");
  const  ulProjetos = document.querySelectorAll(".projetos_armazenamento ul");
  botaoProjeto[0].classList.add('ativo');

  botaoProjeto.forEach((item, index) => {
    item.addEventListener("click", () => {
      let botao = botaoProjeto[index].innerHTML;
      ulProjetos[0].innerHTML = "";
     
      if (botao === "Todos") {
        botaoProjeto[0].classList.add('ativo');
        botaoProjeto[1].classList.remove('ativo');
        botaoProjeto[2].classList.remove('ativo');
        for (let i = 0; i < listarTodos.length; i++) {
          ulProjetos[0].appendChild(listarTodos[i]);
          listarTodos[i].classList.add('ativo');
        }
       
      }else if (botao === "Front-End") {
        botaoProjeto[index].classList.add('ativo')
        for (let i = 0; i < listarTodos.length; i++) {
          ulProjetos[0].appendChild(listaFront[i]);
          listaBack[i].classList.remove('ativo');
          botaoProjeto[2].classList.remove('ativo')
          botaoProjeto[0].classList.remove('ativo')
        }
      
      }else if (botao === "Back-End") {
        botaoProjeto[index].classList.add('ativo')
        for (let i = 0; i < listarTodos.length; i++) {
          ulProjetos[0].appendChild(listaBack[i]);
          listaFront[i].classList.remove('ativo');
          listaBack[i].classList.add('ativo');
          botaoProjeto[1].classList.remove('ativo')
          botaoProjeto[0].classList.remove('ativo')
        }
 
      }


    });
  });
}

tipoProjeto()