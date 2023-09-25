let body = document.body,
    menu = document.getElementById('menu')
menu.addEventListener("click", () => {
    if(menu.getAttribute("checked")){
        menu.setAttribute("checked", true)
        if(menu.checked === true){
            body.style.overflowY ="hidden"
        }
        else{
            body.style.overflowY ="auto"
        }
    }
    else{
        menu.setAttribute("checked", false)
        if(menu.checked === true){
            body.style.overflowY ="hidden"
        }
        else{
            body.style.overflowY ="auto"
        }
    }
})

