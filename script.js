let pan = document.getElementById("pan");
let qty = document.getElementById("qty");


function calculate(){

let price = Number(pan.value);

let quantity = Number(qty.value);


let total = price * quantity;


document.getElementById("amount").innerHTML =
"Total Amount: ₹"+total;

}


pan.onchange = calculate;

qty.oninput = calculate;



function makePayment(){


let name =
document.getElementById("name").value;


let mobile =
document.getElementById("mobile").value;


// Name capital letter
name = name.toUpperCase();


// Auto date
let date = new Date().toLocaleDateString();



let amount =
Number(pan.value) * Number(qty.value);



// Check name
if(name==""){

alert("Please enter name");

return;

}



// Check mobile number 10 digit

if(!/^[0-9]{10}$/.test(mobile)){

alert("Mobile number must be 10 digit");

return;

}



let bookingID =
Math.floor(Math.random()*100000);



document.getElementById("result").innerHTML=

"✅ Booking Created <br><br>"+

"Booking ID: "+bookingID+

"<br>Name: "+name+

"<br>Mobile: "+mobile+

"<br>Date: "+date+

"<br>Amount: ₹"+amount+

"<br><br>Scan QR and Pay";


}
