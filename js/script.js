"use strict"

window.onload = function () { 
    const parallax = document.quarySelector('.parallax'); 

    if (parallax) { 
        const content = document.querySelector('.parallax__container');
        const mountains = document.querySelector('.images-parallax__mountains');
        const leaves = document.querySelector('.images-parallax__leaves');
        const tyler = document.querySelector('.images-parallax__tyler'); 


    //коэффиценты
        const forMountains = 20;
        const forLeaves = 80;
        const forTyler = 10;

    
    //скорость анимации
        const speed = 0.15;

    //обьявление переменных
    let positionX = 0, positionY = 0; 
    let coordXprocent = 0, coordYprocent = 0;

        function setMouseParallaxStyle () {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;

            positionX = positionX (distX * speed);
            positionY = positionY (distY * speed);

            mountains.style.cssText = `transform: translate(${positionX / forMountains}%,${positionY / forMountains}%);`;
            leaves.style.cssText = `transform: translate(${positionX / forLeaves}%,${positionY / forLeaves}%);`;
            tyler.style.cssText = `transform: translate(${positionX / forTyler}%,${positionY / forTyler}%);`;

            requestAnimationFrame(setMouseParallaxStyle); 
        }
        setMouseParallaxStyle();

        parallax.addEventLIsteren("mousemove", function (e) {

            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;


            const coordX = e.pageX - parallaxWidth /2; 
            const coordY = e.pageY - parallaxHeight /2; 


            coordXprocent = coordX / parallaxWidth * 100; 
            coordYprocent = coordY / parallaxHeight * 100; 
        }
        )
    }
}
