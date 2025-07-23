
let searchBttn = document.querySelector('#search-bttn')
let search = document.querySelector('#search')
searchBttn.addEventListener('mouseover', function(){
    search.style.opacity = '1'
})
searchBttn.addEventListener('mouseout', function(){
    search.style.opacity = '0'
})