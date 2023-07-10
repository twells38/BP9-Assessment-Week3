//a user clicks on my favourite color button, it should alert the user of your favorite color
function myColor() {
    alert(`My favourite color : Pink.`)
    document.body.style.backgroundColor = 'pink'
}
document.getElementById('color').addEventListener('click', myColor)

//a user clicks on my favourite place button, it should alert the user of your favorite place
function myPlace() {
    alert(`My favourite place : Daytona Beach`)
}
document.getElementById('place').addEventListener('click', myPlace)

//a user clicks on my favourite ritual button, it should alert the user of your favorite ritual

function myFavouriteRitual() {
    alert(`My favourite ritual : Holidays`)
}
document.getElementById('ritual').addEventListener('click',myFavouriteRitual)