let left_menu = document.querySelector('#left-menu')
let click_img  = document.querySelector('#click-img')
click_img.style.transition = '0.5s'
click_img.addEventListener('click', function(){
    if(left_menu.style.left === '0px'){
        left_menu.style.left = '-320px'
        click_img.style.marginLeft = '0px'
        anime({
            targets: click_img,
            keyframes:[
                {rotate: 0, duration: 250}
            ]
        })
    }

    else{
        left_menu.style.left = '0px'
        click_img.style.marginLeft = '320px'
        anime({
            targets: click_img,
            keyframes:[
                {rotate: 90, duration:250,}
            ],
        })
    }
})