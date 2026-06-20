let pan = document.getElementById("pan");
let qty = document.getElementById("qty");


function calculateAmount(){

let price = Number(pan.value);

let quantity = Number(qty.value);


let total = price * quantity;


document.getElementById("amount").innerHTML =
"Total Amount: ₹"+total;

}



pan.onchange = calculateAmount;

qty.oninput = calculateAmount;




function makePayment(){


let name =
document.getElementById("name").value;


let mobile =
document.getElementById("mobile").value;


let date =
document.getElementById("date").value;



let price =
Number(pan.value);


let quantity =
Number(qty.value);


let amount =
price * quantity;



if(name=="" || mobile=="" || date==""){

alert("Please fill all details");

return;

}



// =====================
// ADD YOUR UPI DETAILS
// =====================


let upiID = "rahulbidwas725@okicici";

let payeeName = "biku ";



// UPI LINK

let upiLink =

"upi://pay?pa="+upiID+
"&pn="+payeeName+
"&am="+amount+
"&cu=INR";



// Mobile Google Pay / UPI Open

window.location.href = upiLink;



document.getElementById("result").innerHTML =

"Booking Amount ₹"+amount;


}
