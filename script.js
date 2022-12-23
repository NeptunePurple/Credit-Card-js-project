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
    // if(e.target.value.length)
    //pure string ko check karna padega bhai, user backspace karke sahi daal dega to bhi dikkat aayegi(Lmao)
    // Number('123') = 123     Number('abc') = nan
    let str =  event.target.value;
    // console.log(formnumber.value === '');
    const errorNumber = document.querySelector('#errorCardNumber');
    if(str === ''){
        if(!errorNumber.classList.contains("hidden")) errorNumber.classList.add("hidden");
    }
    else if(str.length !==0)
    {
        
    if(!Number(str)){
        errorNumber.innerHTML = "Character Not Allowed";
        // const errormsg = document.createElement('p');
        // errormsg.innerText = 'Number daalo bhai';
        // formnumber.append(errormsg);
        // console.error("Character Not Allowed");
        if(errorNumber.classList.contains("hidden")) errorNumber.classList.remove("hidden");
    }else{
        if(!errorNumber.classList.contains("hidden")) errorNumber.classList.add("hidden");
        12345678 => str[0:4]+" "+5678+" "
    }

}
 
    // if(String(Number(str)) == 'NaN'){
    //     console.error("Character Not Allowed part2");
    // }

    // let currentChar = str[str.length - 1];
    // console.log(currentChar.charCodeAt(0));
    // if(currentChar.charCodeAt(0) >= 49 && currentChar.charCodeAt(0) <= 57){
    //     //card Print    
    // }else{
    //     console.error("Character Not Allowed");
    // }

    
    // event.target.value==="" ?
    // if(typeof Number(event.target.value) !== 'number')
    // {

    //     // Number --> Valid
    //     // Invalid --> Error
    //     // const errormessage = document.createElement('p');
    //     // errormessage.innerText='Wrong Format, Numbers Only';
    //     // formnumber.appendChild(errormessage);
    //     // console.log(errormessage);
    //     console.log('not number');
    // }
    // if(typeof Number(event.target.value) == 'number'){
    //     console.log('number');
    // // cardnumber.innerText = event.target.value;
    // }
})

