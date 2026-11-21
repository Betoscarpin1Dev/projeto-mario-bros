

const formulário = document.querySelector(".formulário");
const mascara = document.querySelector(".mascara-formulario");



function mostrarForm() {
   formulário.style.left = "50%";
   formulário.style.transform = "translateX(-50%)"
   mascara.style.visibility = "visible";

}

function esconderForm() {
   formulário.style.left = "-340px";
   formulário.style.transform = "translateX(0)"
   mascara.style.visibility = "hidden";
}








