window.onload = function(){

    // ACTIVAR ANIMACION HOME
    container_anim.play();

    // GESTIONAR MENU
    const btn = document.getElementById('btn-menu').addEventListener('click', function(){
        const navbar = document.getElementById('nav');
        if (navbar.className === 'menu'){
            navbar.className += ' responsive';
        } else {
            navbar.className = 'menu';
        }
    });
}


// ANIMACIONES

// ANIMACIONES HOME
var container_anim = gsap.from(".container", {
    duration: 2, 
    y: 50,
    opacity: 0,
    ease: Expo.easeInOut,
    paused: true
});


// FUNCIONES
function changeActive(id){
    if (document.getElementById(id).className === ''){

        const element_active = document.querySelector('.active');

        document.getElementById(id).className = 'active';
        element_active.className = '';
    }
}