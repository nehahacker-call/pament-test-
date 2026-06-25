function makePayment(){


let name = document.getElementById("name").value.toUpperCase();


let mobile = document.getElementById("mobile").value;


let pan = document.getElementById("pan");


let panName = pan.options[pan.selectedIndex].text;


let price = Number(pan.value);


let qty = Number(document.getElementById("qty").value);


let amount = price * qty;



// Auto Date

let date = new Date().toLocaleDateString();




// Name Check

if(name==""){

alert("Enter Name");

return;

}



// Mobile Check

if(!/^[0-9]{10}$/.test(mobile)){

alert("Mobile number must be 10 digit");

return;

}




// Booking ID

let bookingID = Math.floor(Math.random()*100000);






// =======================
// GOOGLE SHEET SAVE
// =======================


let scriptURL = "https://script.google.com/macros/s/AKfycbxnuFBkySmqIN03tK19r7-lGlf-FnVbh-x2CChDBtiDeabknJ0no6bnrblT0g7Yfx-I/exec";



fetch(scriptURL,{

method:"POST",

body:JSON.stringify({


name:name,

mobile:mobile,

pan:panName,

qty:qty,

amount:amount,

bookingID:bookingID,

date:date


})


})


.then(response=>response.text())


.then(data=>{


console.log("Google Sheet Saved:",data);


})


.catch(error=>{


console.log("Sheet Error:",error);


});







// =======================
// UPI PAYMENT
// =======================


let upiID = "rahulbidwas725@okicici";


let shopName = "PAN SHOP";



let upiLink =

"upi://pay?pa="+upiID+
"&pn="+shopName+
"&am="+amount+
"&cu=INR";







// Device Check


let isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);




if(isMobile){



// Mobile UPI Open


window.location.href = upiLink;



// UPI app not found হলে screen


setTimeout(function(){


showPaymentScreen(
amount,
upiID,
bookingID
);


},3000);



}

else{



// Laptop Payment Screen


showPaymentScreen(
amount,
upiID,
bookingID
);



}





}







// =======================
// PAYMENT SCREEN
// =======================


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
Scan QR Code and Pay</p>



</div>


`;



}
