
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


let contenedores = [imgUno,imgDos,imgTres,imgCuatro,imgCinco,imgSeis];
let src = ["../img/imgMadera1.png","../img/imgMadera2.jpeg","../img/imgMadera3.jpeg","../img/imgMadera4.jpg","../img/imgMadera5.jpeg","../img/imgMadera6.png"];



for(let i = 0;i < 6;i++){
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