const formname = document.getElementById('cardholder_name');
const cardname = document.getElementById('name');

formname.addEventListener('keyup',function(event){
    // event.target.value==="" ?
    cardname.innerText = event.target.value;
    // event.target.value==="" ? cardname.placeholder : event.target.value
})

const formnumber = document.getElementById('card_number');
const cardnumber = document.getElementById('number');

formnumber.addEventListener('keyup',function(event){
    // event.target.value==="" ?
    if(typeof Number(formnumber.value) != 'number')
    {
        // const errormessage = document.createElement('p');
        // errormessage.innerText='Wrong Format, Numbers Only';
        // formnumber.appendChild(errormessage);
        // console.log(errormessage);
        console.log('1st if');
    }
    if(typeof Number(formnumber.value) == 'number'){
        console.log('2nd if');
    // cardnumber.innerText = event.target.value;
    }
})





function format(s) {
    return s.toString().replace(/\d{4}(?=.)/g, "$& ");
  }
