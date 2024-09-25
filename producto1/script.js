let imgs = document.querySelectorAll(".img-mini");
let imgUno = document.querySelector("#imgUno");
let imgDos = document.querySelector("#imgDos");
let imgTres = document.querySelector("#imgTres");


let contenedores = [imgUno,imgDos,imgTres];
let src = ["../img/imgTela.png","../img/imgTela2.jpeg","../img/imgTela3.jpeg"];



for(let i = 0;i < 3;i++){
  contenedores[i].src = src[i];
};



imgs.forEach(imgs => {
    imgs.addEventListener("click", () => {
        const srcPrincipal = imgUno.src;
        imgUno.src = imgs.src;
        imgs.src = srcPrincipal;
    });
});

