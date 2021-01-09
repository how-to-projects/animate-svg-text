// const logo = document.querySelectorAll('#logo path');
const logo = document.querySelector('#logo');
const s = logo.getElementsByClassName('paths');
debugger;
for (let i =0; i < logo.length; i++) {
    debugger;
    console.log(`${i + 1}: ${logo[i].getTotalLength()},`);
}


// document.addEventListener('DOMContentLoaded', () => {
//     function animateSgv (id, delay, delayIncrement){
//         const logo = document.getElementById(id);
//         const logoPaths = document.querySelectorAll(`#${id} path`);
//         delay = delay;
//         for(let i = 0; i < logoPaths.length;i++){
//             //console.log(logoPaths[i].getTotalLength());
//             logoPaths[i].style.strokeDasharray  = logoPaths[i].getTotalLength();
//             logoPaths[i].style.strokeDashoffset = logoPaths[i].getTotalLength();
//             logoPaths[i].style.animation = `line-anim 2s ease forwards ${delay}s`;
//             delay+=delayIncrement;
//             console.log(delay)
//         }
//         logo.style.animation = `fill 0.5s ease forwards ${delay}s`;
//     }
//     animateSgv('logo', 0, 0.5)
// }, false);