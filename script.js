function makePayment(){

let name = document.getElementById("name").value.toUpperCase();

let mobile = document.getElementById("mobile").value;

let price = Number(document.getElementById("pan").value);

let qty = Number(document.getElementById("qty").value);

let amount = price * qty;


if(name==""){
    alert("Enter name");
    return;
}


if(!/^[0-9]{10}$/.test(mobile)){
    alert("Mobile number must be 10 digit");
    return;
}


// তোমাৰ UPI ID দিবা
let upiID = "rahulbidwas725@okicici";

let shopName = "PAN SHOP";


let upiLink =
"upi://pay?pa="+upiID+
"&pn="+shopName+
"&am="+amount+
"&cu=INR";


// Mobile check

let isMobile = /Android|iPhone/i.test(navigator.userAgent);


if(isMobile){

    // UPI open

    window.location.assign(upiLink);


    setTimeout(function(){

        alert("UPI app not found. Please install Google Pay/PhonePe.");

    },3000);


}else{


    // Laptop payment screen

    document.body.innerHTML = `

    <div style="text-align:center;margin-top:50px">

    <h2>Payment</h2>

    <h3>Amount: ₹${amount}</h3>

    <img src="upi-qr.png" width="250">

    <p>UPI ID: ${upiID}</p>

    </div>

    `;

}

}
