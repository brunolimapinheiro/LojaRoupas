const para = document.querySelector('.textoF');

function aparecer(){ // faz a div aparecer
    para.style.opacity = 1
}
setInterval(aparecer , 10); //faz o intervalo de tempo 

const formu = document.querySelector('.formu');
console.log(formu)

function subir(){ // a div subir para o eixo 0 e faz ela aparecer
    formu.style.transform='translateX(0)';
    formu.style.opacity=1;
}
setInterval(subir , 10); // intervalo de tempo




