const openBtn = document.querySelector('.nav-btn');
const navBar = document.querySelector('#nav-sect');
const navList = document.querySelectorAll('.nav-list');
const switchBox = document.querySelectorAll('.switch-input')
const header = document.querySelector('header')
const body = document.querySelector('body')
const footer = document.querySelector('footer')
const pieCard = document.querySelectorAll('figure.pie')
const nav = document.querySelector('nav')
const orderBtn = document.querySelectorAll('main figure.pie button.order-btn');
const main = document.querySelector('main');
const location1 = document.querySelector('.get-location')
const location2 = document.querySelector('.watch-location')
const locationSection = document.querySelector('#location-section')
const mapSec = document.querySelector('.map')
 
try{

    // nav-bar dropdown for small screen
    openBtn.addEventListener('click', ()=>{
        navBar.classList.toggle('open');
    })

    // nav list active toggle
    navList.forEach(item=>{
        item.addEventListener('click', e=>{
            document.querySelector('.nav-list.active').classList.remove('active')
            e.currentTarget.classList.add('active')
        })
    })

    // Dark theme controller 
    switchBox.forEach(item=>{
        item.addEventListener('click', (event)=>{
            header.classList.toggle('dark-1');
            body.classList.toggle('dark-2')
            footer.classList.toggle('dark-1');
            pieCard.forEach(item=>{
                item.classList.toggle('dark-3')
            })
            orderBtn.forEach(item=>{               
                item.classList.toggle('dark-4')
            })
            nav.classList.toggle('dark-4')
        })
    })
    
    //Get location and map using the geolocation WebAPI and OpenLayer API
    location1.addEventListener('click', e=>{
        const success = async pos=> {
            const userPos = await pos.coords
            const {latitude, longitude} = userPos
            mapSec.style.height = '400px'
            let map = new ol.Map({
                target: 'map',
                layers: [
                  new ol.layer.Tile({
                    source: new ol.source.OSM()
                  })
                ],
                view: new ol.View({
                  center: ol.proj.fromLonLat([latitude, longitude]),
                  zoom: 4
                })
              });
        }
        const error = err => console.log(err)
        navigator.geolocation.getCurrentPosition(success, error);
    },{once: true})
}
catch(err){
    console.error(err)
}