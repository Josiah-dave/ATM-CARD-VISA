let number = document.getElementById('num')
let month = document.getElementById('month')
let year = document.getElementById('year')
let Name = document.getElementById('name')
let cvv = document.getElementById('cvv')



let numberDisplay = document.getElementById('number')
let monthDisplay = document.getElementById('monthd')
let yearDisplay = document.getElementById('yeard')
let nameDisplay = document.getElementById('named')
let cvvDisplay = document.getElementById('cvvd')

number.addEventListener('keyup', function(){
    numberDisplay.textContent = number.value
})

month.addEventListener('click', function(){
    monthDisplay.textContent = month.value
})

year.addEventListener('change', function(){
    yearDisplay.textContent = year.value
})

Name.addEventListener('keyup', function(){
    nameDisplay.textContent = Name.value
})

cvv.addEventListener('keyup', function(){

    cvvDisplay.textContent = cvv.value
})


