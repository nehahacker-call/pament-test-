function makePayment(){

let name = document.getElementById("name").value;
let mobile = document.getElementById("mobile").value;
let date = document.getElementById("date").value;

let price = Number(document.getElementById("pan").value);
let qty = Number(document.getElementById("qty").value);

let amount = price * qty;


if(name=="" || mobile=="" || date==""){
    alert("Please fill all details");
    return;
}


// তোমাৰ UPI ID
let upiID = "zxfamily81@oksbi;

// তোমাৰ নাম
let payeeName = "aszx";


// UPI payment link
let upiURL =
"upi://pay?pa="+upiID+
"&pn="+payeeName+
"&am="+amount+
"&cu=INR";


// Mobile ত UPI app open
window.location.href = upiURL;


document.getElementById("result").innerHTML =
"Booking Amount ₹"+amount;

}
