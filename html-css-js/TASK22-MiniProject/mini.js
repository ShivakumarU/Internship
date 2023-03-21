let email = document.getElementById("Email");
let password = document.getElementById("Password");
let cPassword = document.getElementById("confirm-Password");
let uName = document.getElementById("userName");
let num = document.getElementById("mobile") ;
let nation = document.getElementById("countries");
let email1 = document.getElementById("email1");
let password1 = document.getElementById("password1");
let logIn = document.getElementById("signup");
let loginArray = [];
let emailRegEx = /^([a-zA-Z0-9\.]+)@([a-zA-Z0-9]+)\.([a-z]{2,10})(\.[a-z]{2,10})?$/ ;
let passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*]).{8,15}$/  ;
let mobileRegEx = /^\+([9])([1])\-([6-9])([0-9]{9})$/ ;

document.getElementById("btn111").addEventListener("click", () => {
      document.getElementById("firstDiv").style.visibility="hidden";
      document.getElementById("divHidden").style.visibility="visible";
})

email.addEventListener("input", () => {
      if(emailRegEx.test(email.value)){
            document.getElementById("error1").innerText="Email is Valid !";
            document.getElementById("error1").style.color="white";
            document.getElementById("error1").style.marginLeft="21.5vw";
            email.style.border="none";
            email.style.borderRadius="5px";
            email.style.boxShadow="0px 10px 15px 5px forestgreen";
      }
      else{
            document.getElementById("error1").innerText="Invalid email address";
            document.getElementById("error1").style.color="white";
            email.style.boxShadow="0px 10px 15px 0px red";
            email.style.border="none";
      }
})

password.addEventListener("input", () => {
      if(passwordRegEx.test(password.value)){
            document.getElementById("error2").innerText="Correct !";
            document.getElementById("error2").style.color="white";
            password.style.border="none";
            password.style.borderRadius="5px";
            password.style.boxShadow="0px 10px 15px 5px forestgreen";
            document.getElementById("error2").style.marginLeft="22.5vw";
      }
      else{
            password.style.border="none";
            document.getElementById("error2").innerText="";
            password.style.boxShadow="0px 10px 15px 0px red";
      }
}) 

const RegEx1 = new RegExp('(?=.{8,})');
const RegEx2 = new RegExp('(?=.*[a-z])');
const RegEx3 = new RegExp('(?=.*[A-Z])');
const RegEx4 = new RegExp('(?=.*[0-9])');
const RegEx5 = new RegExp('(?=.*[!@#\$%\^&\*])');
password.addEventListener("input",()=>{
      if(RegEx1.test(password.value)){
            document.getElementById("list1").style.color="green";
      }
      else{
            document.getElementById("list1").style.color="red";
      }
})
password.addEventListener("input",()=>{
      if(RegEx2.test(password.value)){
            document.getElementById("list2").style.color="green";
      }
      else{
            document.getElementById("list2").style.color="red";
      }
})
password.addEventListener("input",()=>{
      if(RegEx3.test(password.value)){
            document.getElementById("list3").style.color="green";
      }
      else{
            document.getElementById("list3").style.color="red";
      }
})
password.addEventListener("input",()=>{
      if(RegEx4.test(password.value)){
            document.getElementById("list4").style.color="green";
      }
      else{
            document.getElementById("list4").style.color="red";
      }
})
password.addEventListener("input",()=>{
      if(RegEx5.test(password.value)){
            document.getElementById("list5").style.color="green";
      }
      else{
            document.getElementById("list5").style.color="red";
      }
})

document.getElementById("show1").addEventListener("click", () => {
      if(password.type==="password"){
            password.type="text";
            document.getElementById("show1").innerText="hide";
      }
      else{
            password.type="password";
            document.getElementById("show1").innerText="show";
      }
})

cPassword.addEventListener("input", () => {
      if(password.value==cPassword.value){
            document.getElementById("error3").innerText="Correct !";
            document.getElementById("error3").style.color="white";
            cPassword.style.border="none";
            cPassword.style.borderRadius="5px";
            cPassword.style.boxShadow="0px 10px 15px 5px forestgreen";
            document.getElementById("error3").style.marginLeft="22.5vw";
      }
      else{
            cPassword.style.border="none";
            document.getElementById("error3").innerText="password did'nt matched";
            document.getElementById("error3").style.color="white";
            cPassword.style.boxShadow="0px 10px 15px 0px red";
      }
})

document.getElementById("show2").addEventListener("click", () => {
      if(cPassword.type==="password"){
            cPassword.type="text";
            document.getElementById("show2").innerText="hide";
      }
      else{
            cPassword.type="password";
            document.getElementById("show2").innerText="show";
      }
})

num.addEventListener("input", () => {
      if(mobileRegEx.test(num.value)){
            document.getElementById("error4").innerText="Correct !";
            document.getElementById("error4").style.color="white";
            document.getElementById("error4").style.marginLeft="22.5vw";
            num.style.border="none";
            num.style.borderRadius="5px";
            num.style.boxShadow="0px 10px 15px 5px forestgreen";
      }
      else{
            num.style.border="none";
            document.getElementById("error4").innerText="Pattern should be +91-9494558983";
            document.getElementById("error4").style.color="white";
            document.getElementById("error4").style.marginLeft="18vw";
            num.style.boxShadow="0px 10px 15px 0px red";
      }
})

nation.addEventListener("change", () => {
      nation.style.boxShadow="0px 10px 15px 5px forestgreen";
      nation.style.borderRadius="5px";
})

logIn.addEventListener("click",()=>{
      if(emailRegEx.test(email.value) && passwordRegEx.test(password.value) && password.value==cPassword.value && mobileRegEx.test(num.value) && nation.style.borderRadius=="5px"){
            loginArray.push(email.value,password.value,mobile.value);
            document.getElementById("firstDiv").style.visibility="hidden";
            document.getElementById("divHidden").style.visibility="visible";
      }
      else{
            alert("error inputs");
      }
})

email1.addEventListener("input", () =>{
      if(email1.value==loginArray[0] || email1.value==loginArray[2]){
            email1.style.boxShadow="0px 12px 17px 5px forestgreen";
            document.getElementById("error11").innerText="Correct !";

      }
      else{
            email1.style.boxShadow="0px 10px 15px 0px red";
            document.getElementById("error11").innerText="Enter valid input";
            document.getElementById("error11").style.marginLeft="25vw";
      }
})
password1.addEventListener("input", () =>{
      if(password1.value==loginArray[1]){
            password1.style.boxShadow="0px 10px 15px 5px forestgreen";
            document.getElementById("error12").innerText="Correct !";

      }
      else{
            password1.style.boxShadow="0px 10px 15px 0px red";
            document.getElementById("error12").innerText="Enter valid input";
            document.getElementById("error12").style.marginLeft="25vw";
      }
})

document.getElementById("show3").addEventListener("click", () => {
      if(password1.type==="password"){
            password1.type="text";
            document.getElementById("show3").innerText="hide";
      }
      else{
            password1.type="password";
            document.getElementById("show3").innerText="show";
      }
})

document.getElementById("login").addEventListener("click" , () =>{
      if((email1.value==loginArray[0] || email1.value==loginArray[2]) && password1.value==loginArray[1] ){
            window.open("https://www.linkedin.com/in/ushivakumar29");
      }
      else{
            alert("error inputs");
      }
})

document.getElementById("btn12").addEventListener("click", () => {
      document.getElementById("firstDiv").style.visibility="visible";
      document.getElementById("divHidden").style.visibility="hidden";
})
  