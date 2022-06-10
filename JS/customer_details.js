function validateForm(event){
  
  console.log("insertForm.name.value");
  event.preventDefault();

 var fname = document.CustomerDetails.fname.value;
 if (!fname){
 document.getElementById("fnameErr").innerHTML = "Name must be filled";  //1
 }
 else{
    var name = /^[a-zA-Z\s]+$/;             
    if(name.test(fname) == false) {
       document.getElementById("fnameErr").innerHTML = "Name must contain alphabets";  //1
    } 
  }
 
 var lname = document.CustomerDetails.lname.value;
  if (!lname){
 document.getElementById("lnameErr").innerHTML = "Name must be filled";      //2
 }
 else{
    var name = /^[a-zA-Z\s]+$/;             
    if(name.test(lname) == false) {
       document.getElementById("lnameErr").innerHTML = "Name must contain alphabets";  //1
    } 
  }

 var add1 = document.CustomerDetails.streetadd1.value;
  if (!add1){
 document.getElementById("st1Err").innerHTML = "Address must be filled";      //3
 }

 var add2 = document.CustomerDetails.streetadd2.value;
  if (!add2){
 document.getElementById("st2Err").innerHTML = "Address must be filled";       //4
 }

 var city = document.CustomerDetails.city.value;
 if (!city){
 document.getElementById("cityErr").innerHTML = "City must be filled";   //5
 }
 else{
  var name = /^[a-zA-Z\s]+$/;             
  if(name.test(city) == false) {
     document.getElementById("cityErr").innerHTML = "City must contain alphabets";  //1
  } 
}

 var state = document.CustomerDetails.state.value;
 if (!state){
 document.getElementById("stateErr").innerHTML = "State must be filled";  //6
 }
 else{
  var name = /^[a-zA-Z\s]+$/;             
  if(name.test(state) == false) {
     document.getElementById("stateErr").innerHTML = "State must contain alphabets";  //1
  } 
}

 var pin = document.CustomerDetails.pin.value;
 if (!pin){
 document.getElementById("pinErr").innerHTML = "Pin must be filled";  //7
 }
 else{
  var no = /^[1-9]\d{5}$/;          
  if(no.test(pin) == false) {
     document.getElementById("pinErr").innerHTML = "Pin code must be of 6 digits";  //1
  } 
}

 var phn = document.CustomerDetails.phone.value;
 if (!phn){
 document.getElementById("phnErr").innerHTML = "Phone number must be filled";  //8
 }
 else{
  var no = /^[1-9]\d{9}$/;          
  if(no.test(phn) == false) {
     document.getElementById("phnErr").innerHTML = "Phone number must be of 10 digits";  //1
  } 
}

 var email = document.CustomerDetails.email.value;
  if (!email){
 document.getElementById("emailErr").innerHTML = "Email id must be filled";      //9
 }
 else{
  var mail = /^\S+@\S+\.\S+$/;         
  if(mail.test(email) == false) {
     document.getElementById("emailErr").innerHTML = "Email must be in a given pattern";  //1
  } 
}

 var feed = document.CustomerDetails.feed.value;
 if (!feed){
 document.getElementById("feedErr").innerHTML = "Please fill your feedback";  //10
 }

 var sugg= document.CustomerDetails.sugg.value;
 if (!sugg){
 document.getElementById("suggErr").innerHTML = "Please fill your Suggestion";  //11
 }



}


