function menuOpen (){
    let botonAbrir = document.querySelector('.abrir');
    let botonCerrar = document.querySelector('.cerrar');
    let elemento = document.querySelector('.capa');
    let menu = document.querySelector('.menu__flotante');
    botonAbrir.addEventListener('click', () => {
        elemento.classList.add('on');
        menu.classList.add('on');
        console.log('abrir')
    })
    botonCerrar.addEventListener('click', ()=> {
        elemento.classList.remove('on');
        menu.classList.remove('on');
    })

    // Si el scroll se mueve esconder el menu
    function scrollHide(){
    let scrollTop = document.documentElement.scrollTop;
    console.log(scrollTop);
    if(scrollTop > 12){
        elemento.classList.remove('on');
        menu.classList.remove('on');
    }
    }
    window.addEventListener('scroll', scrollHide);
}
menuOpen();


// Borrar marca de agua de 000webhost
// function borrarMarca() {
//     let marca = document.querySelectorAll("div");
//         marca[marca.length-1].style.display ="none";
// }

// document.addEventListener('load', borrarMarca());
