function payment(){

let name = document.getElementById("name").value;
let mobile = document.getElementById("mobile").value;
let pan = document.getElementById("pan");
let price = pan.value;
let panName = pan.options[pan.selectedIndex].text;

let qty = document.getElementById("qty").value;
let date = document.getElementById("date").value;


if(name=="" || mobile=="" || date==""){
    alert("Please fill all details");
    return;
}


// Total amount
let amount = price * qty;


// তোমাৰ UPI ID ইয়াত দিবা
let upiID = "zxfamily81@oksbi";

// তোমাৰ নাম
let yourName = "Rinku Biswas ";


// UPI Payment link
let upiLink =
"upi://pay?pa="+upiID+
"&pn="+yourName+
"&am="+amount+
"&cu=INR";


// Button link set
document.getElementById("payLink").href = upiLink;


// Booking message
let bookingID = Math.floor(Math.random()*100000);

document.getElementById("result").innerHTML =
"Booking ID: "+bookingID+
"<br>Pan: "+panName+
"<br>Quantity: "+qty+
"<br>Total: ₹"+amount+
"<br>Click Pay button again to open UPI";

}