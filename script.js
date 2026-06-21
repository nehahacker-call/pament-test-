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


// Name capital
name = name.toUpperCase();


// Auto date
let date = new Date().toLocaleDateString();



let amount =
Number(pan.value) * Number(qty.value);



if(name==""){

alert("Please enter name");

return;

}


// Mobile 10 digit check

if(!/^[0-9]{10}$/.test(mobile)){

alert("Mobile number must be 10 digit");

return;

}



let bookingID =
Math.floor(Math.random()*100000);



// Booking show

document.getElementById("result").innerHTML=

"✅ Booking Created <br><br>"+

"Booking ID: "+bookingID+

"<br>Name: "+name+

"<br>Mobile: "+mobile+

"<br>Date: "+date+

"<br>Amount: ₹"+amount+

"<br><br>Proceeding Payment...";



// UPI Payment

let upiID = "YOUR_UPI_ID";

let payeeName = "YOUR_NAME";


let upiLink =

"upi://pay?pa="+upiID+
"&pn="+payeeName+
"&am="+amount+
"&cu=INR";



// Mobile UPI open

window.location.href = upiLink;


}
