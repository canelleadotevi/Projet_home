const menu_burger = document.querySelector(".menu_burger")
const open = document.getElementById('open')
menu_burger.addEventListener("click", ()=>{
    menu_burger.classList.toggle('active')
    open.classList.toggle('open')
})
