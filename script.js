const formname = document.getElementById('cardholder_name');
const cardname = document.getElementById('name');

formname.addEventListener('keyup',function(event){
    // event.target.value==="" ? 
    cardname.innerText = event.target.value;
    // event.target.value==="" ? cardname.placeholder : event.target.value
})