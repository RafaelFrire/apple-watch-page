const btnMenu = document.querySelector('.btn-menu')


btnMenu.addEventListener('click', ()=>{
    const listMenu = document.querySelector('.list-a')

    listMenu.classList.toggle('active')

})