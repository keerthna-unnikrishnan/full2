document.getElementById('myform').addEventListener('submit',
function(event){
 event.preventDefault();
 let emailerror ='';
 let phoneerror ='';
 let passworderror ='';
 


//validate Email
const email   =document.getElementById('email').value;
const  emailPattern = /^([A-Za-z0-9\.-]+)@([a-z0-9\.-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
if(!emailPattern.test(email)){
    emailerror="please enter a valid email address";
}

//validate phone
const phone = document.getElementById('phone').value;
const phonepattern = /^\d{10}$/;
if(!phonepattern.test(phone)){
    phoneerror="please enter 10 digit phone number";
}
//validate password
const password = document.getElementById('password').value;
if(password.length <6){
    passworderror = "password should be atleast 6 characters long"
}
document.getElementById('emailerror').textContent = emailerror;
document.getElementById('phoneerror').textContent = phoneerror;
document.getElementById('passworderror').textContent = passworderror;
// submit form if no errors
if(!emailerror && !phoneerror && !passworderror)
    alert('the form is succesfully submitted')

});








