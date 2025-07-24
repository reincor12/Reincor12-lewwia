let createBttn = document.querySelector('#create-recipe-bttn')
createBttn.addEventListener('mouseover', function(){
    createBttn.style.backgroundColor = "#9FC87E"
})
createBttn.addEventListener('mouseout', function(){
        createBttn.style.backgroundColor = "#075B5E"
})

let bttnCard = document.querySelector('.bttn-in-card')
bttnCard.addEventListener('mouseover', function(){
    bttnCard.style.borderColor = "#9FC87E"
    bttnCard.style.color = "#9FC87E"
})
bttnCard.addEventListener('mouseout', function(){
        bttnCard.style.borderColor = "#075B5E"
        bttnCard.style.color = "#075B5E"
})