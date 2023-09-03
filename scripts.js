let bottomSwitch = document.querySelector('#switch');


bottomSwitch.addEventListener('click', e => {
    const html = document.documentElement
    html.classList.toggle('light')





    const img = document.querySelector('#profile img');
    if(html.classList.contains('light')){
        img.setAttribute('src','assets/luffy-2023.jpg')
        
    }
    else {
     
        img.setAttribute('src','assets/luffy-gear-second.png')
        img.setAttribute('alt', 'Luffy na segunda marcha')
    }


})