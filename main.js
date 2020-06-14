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

/*---------------------------------CODIGO PARA LAS PAGINAS------------------------------------
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------- */
const serie = {
    'Stage.1 - Ataque del Ángel': [ 'https://i.ibb.co/tMYxyqZ/01.jpg', 
                                    'https://i.ibb.co/P1gXbrR/02.jpg',
                                    'https://i.ibb.co/SwB2dVN/03.jpg',
                                    'https://i.ibb.co/ZK8bwqN/04.jpg',
                                    'https://i.ibb.co/C7Hbdnr/05.jpg', 
                                    'https://i.ibb.co/K9XTLMD/06.jpg', 
                                    'https://i.ibb.co/J5XSFCs/07.jpg', 
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
                                    'https://i.ibb.co/X8Xr8qs/44.jpg']
}


let buttonNext = document.getElementById('next')
let buttonBack = document.getElementById('back')
let pagActual = 0
let imgContainer = document.getElementById('img-container')
let buttonRiver = document.getElementById('button-river')
let containerRiver = document.getElementById('container-river')
let changeCap = document.getElementById('change-cap')
let invisible = true
let capActual = 'Stage.1 - Ataque del Ángel'   
let titleCap = document.getElementById('title-cap')
let numPages = document.getElementById('num-pages')

function renderRiver(){
    containerRiver.innerHTML = ''
    for(let i = 0; i < serie[capActual].length; i++){
        containerRiver.innerHTML+=`<img src="${serie[capActual][i]}" width="600px" alt="Paginas">`
    }
}

function makeListPages (){
    serie[capActual].map((pages, ind)=>{numPages.innerHTML+=`<option value="${ind}">${ind+1}</option>`})
}

makeListPages()

function makeListCap (){
    Object.keys(serie).forEach((cap)=>{changeCap.innerHTML+=`<option value="${cap}">${cap}</option>`})
}   
    
makeListCap()

function replaceImg(imgName) {
    imgContainer.innerHTML = `<img src="${imgName}" height="600px" alt="Paginas">`
}

function next() {
    if(pagActual < serie[capActual].length -1){
        pagActual++
        replaceImg(serie[capActual][pagActual])
    }
}

function back() {
    if(pagActual > 0){
        pagActual--
        replaceImg(serie[capActual][pagActual])
    }
}

function cambiarVisibilidad() {
    if(invisible){
        containerRiver.classList.remove('invisible')
        imgContainer.classList.add('invisible')
    } else {
        imgContainer.classList.remove('invisible')
        containerRiver.classList.add('invisible')
        renderRiver()
    }
    invisible = !invisible
    window.scrollTo(0, 0)
}

/*-----------------------------------EVENTOS------------------------------------------------------
--------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------*/

buttonNext.addEventListener('click', next)
buttonBack.addEventListener('click', back)
buttonRiver.addEventListener('click', cambiarVisibilidad)
changeCap.addEventListener('change', function(evt){
    capActual = evt.target.value
    pagActual = 0
    replaceImg(serie[capActual][pagActual])
    renderRiver()
    makeListPages()
    titleCap.innerText = capActual
})
numPages.addEventListener('change', function(evt){
    pagActual = Number(evt.target.value)
    replaceImg(serie[capActual][pagActual])
})