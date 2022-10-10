//fiz do jeito dedmorado pra eu entender melhor
function procurar(){
  const h1 = document.querySelector('h1');
  const h2 = document.querySelector('h2');
  const h3 = document.querySelector('h3');
  const h4 = document.querySelector('h4');
  const h5 = document.querySelector('h5');
  const h6 = document.querySelector('h6');
  if(h1){
    return h1;
  }
  else if(h2){
    return h2;
  }
  else if(h3){
    return h3;
  }
  else if(h4){
    return h4;
  }
  else if(h5){
    return h5;
  }
  else if(h6){
    return h6;
  }
  else {
    return false;
  }
}

//declaração de variaveis iniciais
const hx = procurar()
let tam = 2
//botões
if(hx){
  b()
}
function b() {
    const button = document.createElement('button');
    button.type = 'button';
    button.innerHTML = '+';
    button.onclick = aumentar
    hx.appendChild(button);
    const button2 = document.createElement('button');
    button2.type = 'button';
    button2.innerHTML = '-';
    button2.onclick = diminuir
    hx.appendChild(button2);
};

//muda o tamanho do titulo

function troca(){
    hx.style.fontSize= `${tam}em`;
}

//funções dos botões

function aumentar() {
  if(tam<10){
    tam += 1;
    troca();
  }
}

function diminuir() {
  if(tam>1){
    tam-=1
    troca();
  }
}