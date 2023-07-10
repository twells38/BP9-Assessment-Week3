console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	let name = document.querySelector('#name') //grab id = name from document and then save it in name variable
	let message = document.querySelector('#message') //grab id = message from document and then save it in message variable
	
	alert(`Name : ${name.value}, Message : ${message.value} has been submitted successfully.`
	);
	name.value = ''
	message.value = ''
}
function hoverImage() {
	alert('You are so cute')
}


let form = document.querySelector('#contact');
form.addEventListener('submit', handleSubmit);

let image = document.querySelector('#home-img');
image.addEventListener('mouseover', hoverImage)