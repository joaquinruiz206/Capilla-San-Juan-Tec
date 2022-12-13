
const menu = document.querySelector(".icon")
const elem_menu = document.querySelector(".navegacion")
let mover = false

menu.addEventListener('click', () =>{
    console.log("hola")
    if(mover===false){
        elem_menu.style.transform="translate(100%)";
        elem_menu.style.transition=".5s"
        mover=true;
    }else{
        elem_menu.style.transform="translate(-100%)";
        elem_menu.style.transition=".5s"
        mover=false;
    }
})