let imgPrincipal = document.querySelector(".img-principal");
let botonCierre = document.querySelector(".boton-cierre");
let imgGrande = document.querySelector(".img-grande");
let contenedorImgGrande = document.querySelector(".contenedor-img-grande");
let imgs = document.querySelectorAll(".img-mini");
let imgUno = document.querySelector("#imgUno");
let imgDos = document.querySelector("#imgDos");


let contenedores = [imgUno,imgDos];
let src = ["../img/imgCarton1.jpeg","../img/imgCarton2.jpeg"];



for(let i = 0;i < 2;i++){
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