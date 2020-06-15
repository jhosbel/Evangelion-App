/*----------------------------------PAGINA PRINCIPAL--------------------------------------------
------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------ */

let btnItems = document.querySelectorAll('.cajas-articulos .titulos')

for (let i = 0; i < btnItems.length; i++){
    btnItems[i].addEventListener('click', function(e){
        let btn = e.target
        if (btn.className == 'titulos active'){
            btn.classList.remove('active')
        } else {
            btn.classList.add('active')
        }
    })
}

/*-------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------ */

const carrusel = {
    'Stage.1 - Ataque del Ángel': [
        'https://i.ibb.co/tMYxyqZ/01.jpg', 
        'https://i.ibb.co/P1gXbrR/02.jpg',
        'https://i.ibb.co/SwB2dVN/03.jpg',
        'https://i.ibb.co/ZK8bwqN/04.jpg',
        'https://i.ibb.co/C7Hbdnr/05.jpg', 
        'https://i.ibb.co/K9XTLMD/06.jpg', 
        'https://i.ibb.co/4PB0gJV/07.jpg', 
        'https://i.ibb.co/1b8qCN4/08.jpg', 
        'https://i.ibb.co/XZ2vTwh/09.jpg', 
        'https://i.ibb.co/Z6qNcMg/10.jpg', 
        'https://i.ibb.co/6yzXVYH/11.jpg', 
        'https://i.ibb.co/f4PxTdv/12.jpg', 
        'https://i.ibb.co/XtVkQgq/13.jpg', 
        'https://i.ibb.co/B3gSmSG/14.jpg', 
        'https://i.ibb.co/2ZvGDhV/15.jpg', 
        'https://i.ibb.co/6BJxSWb/16.jpg', 
        'https://i.ibb.co/Kz3WfXB/17.jpg', 
        'https://i.ibb.co/kgCKHz4/18.jpg', 
        'https://i.ibb.co/RYDN2fb/19.jpg', 
        'https://i.ibb.co/MZJShMf/20.jpg', 
        'https://i.ibb.co/jwK66Mt/21.jpg', 
        'https://i.ibb.co/V9xxWZj/22.jpg', 
        'https://i.ibb.co/N1851gN/23.jpg', 
        'https://i.ibb.co/XbkXGmB/24.jpg', 
        'https://i.ibb.co/1K7DGZ6/25.jpg', 
        'https://i.ibb.co/n73VDFG/26.jpg', 
        'https://i.ibb.co/48H9Mky/27.jpg', 
        'https://i.ibb.co/7Y3HccY/28.jpg', 
        'https://i.ibb.co/0sr3mCF/29.jpg', 
        'https://i.ibb.co/FxZ831Y/30.jpg', 
        'https://i.ibb.co/L9HRjmx/31.jpg', 
        'https://i.ibb.co/16MMFy1/32.jpg', 
        'https://i.ibb.co/99txqYj/33.jpg', 
        'https://i.ibb.co/RQMsTSZ/34.jpg', 
        'https://i.ibb.co/5FGVr9B/35.jpg', 
        'https://i.ibb.co/CzqB8ty/36.jpg', 
        'https://i.ibb.co/mSsXdns/37.jpg', 
        'https://i.ibb.co/10XpKRW/38.jpg', 
        'https://i.ibb.co/MCSYTsM/39.jpg', 
        'https://i.ibb.co/5vFkcZF/40.jpg', 
        'https://i.ibb.co/xsmpzRx/41.jpg', 
        'https://i.ibb.co/bB3X6Qm/42.jpg', 
        'https://i.ibb.co/dWnV9yp/43.jpg', 
        'https://i.ibb.co/X8Xr8qs/44.jpg'],

    'Stage.2 - Reencuentro': [
        'https://i.ibb.co/G9NsrZb/01.jpg', 
        'https://i.ibb.co/HhZnSN0/02.jpg',
        'https://i.ibb.co/02RxJKy/03.jpg',
        'https://i.ibb.co/w0s6xbT/04.jpg',
        'https://i.ibb.co/pxW7dN5/05.jpg', 
        'https://i.ibb.co/F5m0nf3/06.jpg', 
        'https://i.ibb.co/k4WdLB6/07.jpg', 
        'https://i.ibb.co/wWX5WCM/08.jpg', 
        'https://i.ibb.co/TKScC74/09.jpg', 
        'https://i.ibb.co/d5hY2wy/10.jpg', 
        'https://i.ibb.co/jG0NGnx/11.jpg', 
        'https://i.ibb.co/9gKDx8R/12.jpg', 
        'https://i.ibb.co/nsWPRys/13.jpg', 
        'https://i.ibb.co/GPn0BjC/14.jpg', 
        'https://i.ibb.co/L5swFLC/16.jpg', 
        'https://i.ibb.co/XLSmd3N/17.jpg', 
        'https://i.ibb.co/SNRjd9M/18.jpg', 
        'https://i.ibb.co/tYx3b6S/19.jpg', 
        'https://i.ibb.co/jgr971z/20.jpg', 
        'https://i.ibb.co/N71jmwT/21.jpg', 
        'https://i.ibb.co/0Z3brBY/22.jpg', 
        'https://i.ibb.co/yyKgvH0/23.jpg', 
        'https://i.ibb.co/jWz9WrF/24.jpg', 
        'https://i.ibb.co/dgBc9xC/25.jpg'], 

    'Stage.3 - Unidad 01, Avanza': [
        'https://i.ibb.co/52pBNR2/01.jpg', 
        'https://i.ibb.co/2yTSdpR/02.jpg', 
        'https://i.ibb.co/3htF45B/03.jpg', 
        'https://i.ibb.co/njrCkgk/04.jpg', 
        'https://i.ibb.co/j8mQjHM/05.jpg', 
        'https://i.ibb.co/3CqBykG/06.jpg', 
        'https://i.ibb.co/P1wwHbL/07.jpg', 
        'https://i.ibb.co/KzfSbc2/08.jpg', 
        'https://i.ibb.co/wWG0HBx/09.jpg', 
        'https://i.ibb.co/T1Vk81B/10.jpg', 
        'https://i.ibb.co/xXr7gmH/11.jpg', 
        'https://i.ibb.co/p2wydJG/12.jpg', 
        'https://i.ibb.co/dfr1Tgc/13.jpg', 
        'https://i.ibb.co/GJ9zQHV/14.jpg', 
        'https://i.ibb.co/d00KLh5/15.jpg', 
        'https://i.ibb.co/gWzvLpc/16.jpg', 
        'https://i.ibb.co/whS3Dvj/17.jpg', 
        'https://i.ibb.co/M9QhYkZ/18.jpg', 
        'https://i.ibb.co/JcqDXw1/19.jpg', 
        'https://i.ibb.co/jRy1RvL/20.jpg', 
        'https://i.ibb.co/Jqh12mp/21.jpg', 
        'https://i.ibb.co/X2BZ50m/22.jpg', 
        'https://i.ibb.co/6B8Rd3C/23.jpg', 
        'https://i.ibb.co/t30W7yr/24.jpg'],

    'Stage.4 - Silencio': [
        'https://i.ibb.co/9WGKLCY/FE2015-NGE-V01-095.jpg', 
        'https://i.ibb.co/Njfppt8/FE2015-NGE-V01-096.jpg', 
        'https://i.ibb.co/qDwC6js/FE2015-NGE-V01-097.jpg', 
        'https://i.ibb.co/pjt5Kq4/FE2015-NGE-V01-098.jpg', 
        'https://i.ibb.co/VgpdjtN/FE2015-NGE-V01-099.jpg', 
        'https://i.ibb.co/vxnpsB9/FE2015-NGE-V01-100.jpg', 
        'https://i.ibb.co/bdqkmhw/FE2015-NGE-V01-101.jpg', 
        'https://i.ibb.co/4KwZ1Cb/FE2015-NGE-V01-102.jpg', 
        'https://i.ibb.co/pKc6LPz/FE2015-NGE-V01-103.jpg', 
        'https://i.ibb.co/5sP5LBD/FE2015-NGE-V01-104.jpg', 
        'https://i.ibb.co/NSzhyBM/FE2015-NGE-V01-105.jpg', 
        'https://i.ibb.co/tZ37szY/FE2015-NGE-V01-106.jpg', 
        'https://i.ibb.co/94tFRpg/FE2015-NGE-V01-107.jpg', 
        'https://i.ibb.co/VBQ6mPj/FE2015-NGE-V01-108.jpg', 
        'https://i.ibb.co/xY1wjy0/FE2015-NGE-V01-109.jpg', 
        'https://i.ibb.co/XxcKLB9/FE2015-NGE-V01-110.jpg', 
        'https://i.ibb.co/dthWBjr/FE2015-NGE-V01-111.jpg', 
        'https://i.ibb.co/MVsw22M/FE2015-NGE-V01-112.jpg', 
        'https://i.ibb.co/W5wJpQN/FE2015-NGE-V01-113.jpg', 
        'https://i.ibb.co/Pwt7RJK/FE2015-NGE-V01-114-115.jpg', 
        'https://i.ibb.co/QkmgzDq/FE2015-NGE-V01-116.jpg', 
        'https://i.ibb.co/rsyv7mH/FE2015-NGE-V01-117.jpg', 
        'https://i.ibb.co/xL7NykV/FE2015-NGE-V01-118.jpg',],
                                    
    'Stage.5 - Visiones en las Profundidades de la Luz': [
        'https://i.ibb.co/zGTfjHw/FE2015-NGE-V01-119.jpg',
        'https://i.ibb.co/VqzdjSM/FE2015-NGE-V01-120.jpg',
        'https://i.ibb.co/k6wgPY0/FE2015-NGE-V01-121.jpg',
        'https://i.ibb.co/s3q09Py/FE2015-NGE-V01-122.jpg',
        'https://i.ibb.co/56H7Pzw/FE2015-NGE-V01-123.jpg',
        'https://i.ibb.co/MBZkqYD/FE2015-NGE-V01-124.jpg',
        'https://i.ibb.co/86GDMkK/FE2015-NGE-V01-125.jpg',
        'https://i.ibb.co/thVr3Kx/FE2015-NGE-V01-126.jpg',
        'https://i.ibb.co/8M1zyBW/FE2015-NGE-V01-127.jpg',
        'https://i.ibb.co/ch6x6p9/FE2015-NGE-V01-128.jpg',
        'https://i.ibb.co/FbWhkkw/FE2015-NGE-V01-129.jpg',
        'https://i.ibb.co/261yMLd/FE2015-NGE-V01-130.jpg',
        'https://i.ibb.co/YLytVvQ/FE2015-NGE-V01-131.jpg',
        'https://i.ibb.co/mbFNmQ2/FE2015-NGE-V01-132.jpg',
        'https://i.ibb.co/THX1tBq/FE2015-NGE-V01-133.jpg',
        'https://i.ibb.co/c2kKbmC/FE2015-NGE-V01-134.jpg',
        'https://i.ibb.co/2g59Hcr/FE2015-NGE-V01-135.jpg',
        'https://i.ibb.co/cxp4Hg2/FE2015-NGE-V01-136.jpg',
        'https://i.ibb.co/hRf7qWc/FE2015-NGE-V01-137.jpg',
        'https://i.ibb.co/6DfyBnN/FE2015-NGE-V01-138.jpg',
        'https://i.ibb.co/Vt8QZjQ/FE2015-NGE-V01-139.jpg',
        'https://i.ibb.co/qxXry88/FE2015-NGE-V01-140.jpg',
        'https://i.ibb.co/bNjsRBt/FE2015-NGE-V01-141.jpg',
        'https://i.ibb.co/MG68hWM/FE2015-NGE-V01-142.jpg',
        'https://i.ibb.co/C6GZKsd/FE2015-NGE-V01-143.jpg',
        'https://i.ibb.co/1Tq507t/FE2015-NGE-V01-144.jpg',
        'https://i.ibb.co/RCqp7qF/FE2015-NGE-V01-145.jpg',
        'https://i.ibb.co/QP3hCG9/FE2015-NGE-V01-146.jpg']}

let buttonNext = document.getElementById('next')
let buttonBack = document.getElementById('back')
let buttonSiguiente = document.getElementById('next-cap')
let buttonAnterior = document.getElementById('back-cap')
let changeCap = document.getElementById('change-cap')
let buttonCascada = document.getElementById('button-cascada')
let containerCascada = document.getElementById('container-cascada')
let numPages = document.getElementById('num-pages')
let invisible = true
let imgActual = 0
let imgContainer = document.getElementById('img-container')
let contador = 0
let capActual = Object.keys(carrusel)[contador]
let titleCap = document.getElementById('cap-title')

function galeria (imgName) {
    imgContainer.innerHTML = `<img src="${imgName}" class="imagen" style="max-height: 550px; max-width: 740px;" height="550px" alt="Paginas">`
}

function titulo (titulo) {
    titleCap.innerText  = titulo
}

/*--------------------------------------LISTA DE CAPITULOS----------------------------------------
--------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------*/

function listaCap () {
    Object.keys(carrusel).forEach((cap) => {changeCap.innerHTML += `<option value="${cap}">${cap}</option>`})
}

listaCap ()

function eventLista(evt) {
    capActual = evt.target.value
    imgActual = 0
    galeria(carrusel[capActual][imgActual])
    listaCap ()
    titleCap.innerText = capActual
}

/*-------------------------------MODO CASCADA-----------------------------------------------------
 -------------------------------------------------------------------------------------------------
 -----------------------------------------------------------------------------------------------*/

 function renderCascada () {
    containerCascada.innerHTML = ''
    for(let i = 0; i < carrusel.length; i++){
        containerCascada.innerHTML+=`<img src="${carrusel[imgActual][i]}" width="600px" alt="Paginas">`
    }
}

/*-------------------------------LISTA DE PAGINAS NUM---------------------------------------------
--------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------*/

function listaPaginas () {
    carrusel[capActual].map((pages, ind) => {numPages.innerHTML += `<option value="${ind}">${ind+1}</option>`})
}

listaPaginas ()

function eventoPaginas(evt) {
    imgActual = Number(evt.target.value)
    galeria(carrusel[capActual][imgActual])
}

/*-------------------------------FUNCIONES DE BOTONES---------------------------------------------
--------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------*/

function next (){
    if(imgActual < carrusel[capActual].length -1){
        imgActual++
        galeria(carrusel[capActual][imgActual])
    } else if ( imgActual > 0){
        imgActual = 0
        galeria(carrusel[capActual][imgActual])
    }
    window.scrollTo(0, 0)
}

function back () {
    if(imgActual > 0){
        imgActual--
        galeria(carrusel[capActual][imgActual])
    }else if (imgActual < carrusel.length -1) {
        imgActual = 1
        galeria(carrusel[capActual][imgActual])
    }
    window.scrollTo(0, 0)
}

function capituloNext (){
    if(contador < Object.keys(carrusel).length -1){
        contador++
        capActual = Object.keys(carrusel)[contador]
        titulo(capActual) 
        imgActual = 0
        galeria (carrusel[capActual][imgActual])
    }
    window.scrollTo(0, 0)
}

function capituloBack (){
    if(contador > 0){
        contador--
        capActual = Object.keys(carrusel)[contador]
        titulo(capActual)
        imgActual = 0
        galeria (carrusel[capActual][imgActual])
    }
    window.scrollTo(0, 0)
}

function cambiarVisivilidad() {
    if(invisible){
        containerCascada.classList.remove('invisible')
        imgContainer.classList.add('invisible')
    } else {
        imgContainer.classList.remove('invisible')
        containerCascada.classList.add('invisible')
        renderCascada()
    }
    invisible = !invisible
    window.scrollTo(0, 0)
}

/*---------------------------------------------EVENTOS---------------------------------------
---------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------- */

buttonNext.addEventListener('click', next)
buttonBack.addEventListener('click', back)
buttonSiguiente.addEventListener('click', capituloNext)
buttonAnterior.addEventListener('click', capituloBack)
buttonCascada.addEventListener('click', cambiarVisivilidad)
changeCap.addEventListener('change', eventLista)
numPages.addEventListener('change', eventoPaginas)

/*---------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------- */

/*-------------------------MENU HAMBURGUESA-----------------------*/

let click = document.getElementById('myLinks')

function action (){
    if(click.style.display === 'flex'){
        click.style.display = 'none'
    } else {
        click.style.display = 'flex'
    }
}

abrir.addEventListener('click', action)