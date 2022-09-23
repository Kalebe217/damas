let titulo

procurar()
function procurar(){
    for(let i = 1; i < 7; i++){
        titulo = document.querySelector(`h${i}`)
        console.log(i)
        if(titulo != null){
            break
        }
    }
}


let tam = 2;
function atuali(){
    titulo.style.fontSize= `${tam}em`;        
}


function mais() {
    tam += 2;
    atuali()     
}


function menos() {
    if (tam > 1) {
        tam -= 1;
        atuali();
    }
}