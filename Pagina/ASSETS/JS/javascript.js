const boton = document.getElementById("btn-arriba");


window.addEventListener("scroll", () => {
  
    if (document.documentElement.scrollTop > 300) {
        boton.style.display = "block"; 
    } else {
        boton.style.display = "none";
    }
});

boton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});