let pan = document.getElementById("pan");
let qty = document.getElementById("qty");


function calculateAmount(){

    let price = Number(pan.value);
    let quantity = Number(qty.value);

    let total = price * quantity;

    document.getElementById("amount").innerHTML =
    "Total Amount: ₹" + total;

}


pan.onchange = calculateAmount;
qty.oninput = calculateAmount;



function makePayment(){


let name = document.getElementById("name").value;
let mobile = document.getElementById("mobile").value;
let date = document.getElementById("date").value;


let price = Number(pan.value);
let quantity = Number(qty.value);

let amount = price * quantity;



if(name=="" || mobile=="" || date==""){

alert("Please fill all details");
return;

}



// তোমাৰ UPI details

let upiID = "rahulbidwas725@okicici";

let payeeName = "zx";



// UPI Link

let upiLink =
"upi://pay?pa="+upiID+
"&pn="+payeeName+
"&am="+amount+
"&cu=INR";




// Check Mobile or Laptop

let isMobile =
/Android|iPhone|iPad|iPod/i.test(navigator.userAgent);



if(isMobile){


    // Mobile হলে UPI open try কৰিব

    window.location.href = upiLink;


    // যদি UPI app নাথাকে তেন্তে fallback screen

    setTimeout(function(){

        showPaymentScreen(amount);

    },2000);


}
else{


    // Laptop হলে payment screen

    showPaymentScreen(amount);


}



}




function showPaymentScreen(amount){


document.body.innerHTML = `

<div class="box">

<h2>💳 Payment</h2>


<h3>Pay Amount: ₹${amount}</h3>


<h3>Scan QR Code</h3>


<img src="upi-qr.png" width="220">


<p>
UPI ID:
YOUR_UPI_ID
</p>


<button onclick="location.reload()">
Back
</button>


</div>

`;


}
