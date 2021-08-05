const openBtn = document.querySelector('.nav-btn');
const navBar = document.querySelector('#nav-sect');
const navList = document.querySelectorAll('.nav-list')

try{
    openBtn.addEventListener('click', ()=>{
        navBar.classList.toggle('open');
    })
}
catch(err){
    console.error(err)
}

try{
    navList.forEach(item=>{
        item.addEventListener('click', e=>{
            document.querySelector('.nav-list.active').classList.remove('active')
            e.currentTarget.classList.add('active')
        })
    })
}
catch(err){
    console.error(err)
}