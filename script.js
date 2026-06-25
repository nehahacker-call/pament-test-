function makePayment(){

let name = document.getElementById("name").value.toUpperCase();

let mobile = document.getElementById("mobile").value;

let pan = document.getElementById("pan");

let price = Number(pan.value);

let qty = Number(document.getElementById("qty").value);

let amount = price * qty;


if(name==""){
    alert("Enter Name");
    return;
}


if(!/^[0-9]{10}$/.test(mobile)){
    alert("Mobile number must be 10 digit");
    return;
}


let bookingID = Math.floor(Math.random()*100000);



let upiID = "rahulbidwas725@okicici";

let shopName = "PAN SHOP";



let upiLink =
"upi://pay?pa="+upiID+
"&pn="+shopName+
"&am="+amount+
"&cu=INR";



let isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);



if(isMobile){


window.location.href = upiLink;



setTimeout(function(){

showPaymentScreen(amount,upiID,bookingID);

},3000);



}
else{


showPaymentScreen(amount,upiID,bookingID);


}


}




function showPaymentScreen(amount,upiID,bookingID){


document.body.innerHTML = `

<div class="box">


<h2>💳 Payment</h2>


<h3>
Amount : ₹${amount}
</h3>


<img src="upi-qr.png" width="250">


<p>
UPI ID : ${upiID}
</p>


<p>
Booking ID : ${bookingID}
</p>


<p>
Scan QR Code and Pay
</p>


</div>

`;


}
