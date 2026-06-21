function makePayment(){

let name = document.getElementById("name").value;

let mobile = document.getElementById("mobile").value;


let price = Number(document.getElementById("pan").value);

let qty = Number(document.getElementById("qty").value);


let amount = price * qty;


// Name capital

name = name.toUpperCase();



if(name==""){
    alert("Enter name");
    return;
}


// Mobile check

if(!/^[0-9]{10}$/.test(mobile)){
    alert("Mobile number must be 10 digit");
    return;
}


// তোমাৰ UPI details

let upiID = "rahulbidwas725@okicici";

let shopName = "PAN SHOP";



// UPI link

let upiLink =
"upi://pay?pa="+upiID+
"&pn="+shopName+
"&am="+amount+
"&cu=INR";



// Device check

let mobileDevice =
/Android|iPhone|iPad|iPod/i.test(navigator.userAgent);



if(mobileDevice){

    // Mobile হলে GPay/UPI open

    window.location.href = upiLink;


}

else{


    // Laptop হলে payment screen show

    document.body.innerHTML = `

    <div style="
    text-align:center;
    margin-top:50px;
    font-family:Arial;
    ">

    <h2>💳 Payment</h2>

    <h3>Pay Amount: ₹${amount}</h3>


    <h3>Scan QR Code</h3>


    <img src="upi-qr.png" width="250">


    <p>UPI ID: ${upiID}</p>


    </div>

    `;


}


}
