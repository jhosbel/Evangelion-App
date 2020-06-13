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
    'Stage.1 - Ataque del Ángel': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
                                   '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
                                   '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
                                   '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
                                    '41', '42', '43', '44'],

    'Stage.2 - Reencuentro': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
                              '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
                              '21', '22', '23', '24', '25'],

    'Stage.3 - Unidad 01, Avanza': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
                                    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
                                    '21', '22', '23', '24']
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
        containerRiver.innerHTML+=`<img src="img/Manga/${capActual}/${serie[capActual][i]}.jpg" width="800px" alt="">`
    }
}

function makeListPages (){
    serie[capActual].map((pages, ind)=>{numPages.innerHTML+=`<option value="${ind}">${pages}</option>`})
}

makeListPages()

function makeListCap (){
    Object.keys(serie).forEach((cap)=>{changeCap.innerHTML+=`<option value="${cap}">${cap}</option>`})
}   
    
makeListCap()

function replaceImg(imgName) {
    imgContainer.innerHTML=`<img src="img/Manga/${capActual}/${imgName}.jpg" width="800px" alt="">`
}

function next() {
    if(pagActual < serie[capActual].length -1){
        pagActual++
        replaceImg(serie[capActual][pagActual])
        console.log(pagActual)
    }
}

function back() {
    if(pagActual > 0){
        pagActual--
        replaceImg(serie[capActual][pagActual])
        console.log(pagActual)
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