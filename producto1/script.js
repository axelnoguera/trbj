let imgPrincipal = document.querySelector(".img-principal");
let botonCierre = document.querySelector(".boton-cierre");
let imgGrande = document.querySelector(".img-grande");
let contenedorImgGrande = document.querySelector(".contenedor-img-grande");
let imgs = document.querySelectorAll(".img-mini");
let imgUno = document.querySelector("#imgUno");
let imgDos = document.querySelector("#imgDos");
let imgTres = document.querySelector("#imgTres");
let imgCuatro = document.querySelector("#imgCuatro");
let imgCinco = document.querySelector("#imgCinco");
let imgSeis = document.querySelector("#imgSeis");
let imgSiete = document.querySelector("#imgSiete");


let contenedores = [imgUno,imgDos,imgTres,imgCuatro,imgCinco,imgSeis,imgSiete];
let src = ["../img/imgTela1.jpg","../img/imgTela2.jpeg","../img/imgTela3.png","../img/imgTela4.png","../img/imgTela5.png","../img/imgTela6.jpeg","../img/tela.png"];



for(let i = 0;i < 7;i++){
  contenedores[i].src = src[i];
};



imgs.forEach(imgs => {
    imgs.addEventListener("click", () => {
        const srcPrincipal = imgUno.src;
        imgUno.src = imgs.src;
        imgs.src = srcPrincipal;
    });
});

imgPrincipal.addEventListener("click", ()=>{
    contenedorImgGrande.style.display = "grid";
    imgGrande.src = imgUno.src;
});

botonCierre.addEventListener("click", ()=>{
    contenedorImgGrande.style.display = "none";
});
