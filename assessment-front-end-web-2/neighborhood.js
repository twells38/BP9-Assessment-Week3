

function randomList() {
    let arrayList = ['BigShanty', 'FirstWatch', 'Bigpie Sky', 'Mediteranean','Bangkok Cabin Thai Cuisine'] // create an array of restaurants names.
    let random = Math.floor(Math.random() * arrayList.length) //get random number in arrayList.length
    alert(`${arrayList[random]}`) 
}
let button = document.querySelector('button')
button.addEventListener('click',randomList)