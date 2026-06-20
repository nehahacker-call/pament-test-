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


let amount = price * qty;


// তোমাৰ UPI ID ইয়াত দিবা
let upiID = "zxfamily81@oksbi";

// তোমাৰ নাম
let yourName = "zx";


let upiLink =
"upi://pay?pa="+upiID+
"&pn="+yourName+
"&am="+amount+
"&cu=INR";


// UPI app open
window.location.href = upiLink;


document.getElementById("result").innerHTML =
"Booking Amount: ₹"+amount;

}
