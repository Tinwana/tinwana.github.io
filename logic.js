document.addEventListener('DOMContentLoaded',()=> {
const btnTabs = [...document.querySelectorAll('.card-3 .btn')];
btnTabs.forEach(btnTab =>{
    btnTab.onclick = ()=>{
        btnTab.classList.toggle('text-bg-dark')
    }
})
})
