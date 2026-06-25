function makePayment(){

let name = document.getElementById("name").value.toUpperCase();

let mobile = document.getElementById("mobile").value;

let panSelect = document.getElementById("pan");

let panName = panSelect.options[panSelect.selectedIndex].text;

let price = Number(panSelect.value);

let qty = Number(document.getElementById("qty").value);

let amount = price * qty;


// Auto date

let date = new Date().toLocaleDateString();



if(name==""){
    alert("Enter name");
    return;
}



if(!/^[0-9]{10}$/.test(mobile)){

    alert("Mobile number must be 10 digit");

    return;

}



let bookingID =
Math.floor(Math.random()*100000);



// Google Sheet URL

let scriptURL = "https://script.google.com/macros/s/AKfycbzWNs-aJfh51_9hl3wa8Ckyw0-Ro1NHY6YH45Egik_Yp2_s_7uYEcnfPIJuxykH_9XbHQ/exec";



// Save data to Google Sheet

fetch(scriptURL,{

method:"POST",

body:JSON.stringify({

name:name,

mobile:mobile,

pan:panName,

qty:qty,

date:date,

amount:amount,

bookingID:bookingID

})

})

.then(response=>response.text())

.then(data=>{

console.log("Saved:",data);

});





// UPI Details

let upiID = "rahulbidwas725@okicici";

let shopName = "PAN SHOP";



let upiLink =

"upi://pay?pa="+upiID+
"&pn="+shopName+
"&am="+amount+
"&cu=INR";




// Device check

let isMobile = /Android|iPhone/i.test(navigator.userAgent);



if(isMobile){


window.location.assign(upiLink);



setTimeout(function(){

alert("UPI app not found. Please install Google Pay/PhonePe.");

},3000);



}

else{


document.body.innerHTML = `

<div style="text-align:center;margin-top:50px">

<h2>💳 Payment</h2>

<h3>Amount: ₹${amount}</h3>


<img src="upi-qr.png" width="250">


<p>UPI ID: ${upiID}</p>


<p>Booking ID: ${bookingID}</p>


</div>

`;


}


}
