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


let date =
document.getElementById("date").value;


let amount =
Number(pan.value) * Number(qty.value);



if(name=="" || mobile=="" || date==""){

alert("Please fill all details");

return;

}



let bookingID =
Math.floor(Math.random()*100000);



document.getElementById("result").innerHTML=

"✅ Booking Created <br><br>"+
"Booking ID: "+bookingID+
"<br>Name: "+name+
"<br>Amount: ₹"+amount+
"<br><br>Scan QR and Pay";


}
