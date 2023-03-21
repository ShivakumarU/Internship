// header icons
function aboutus(){
      document.getElementById("about_us").style.visibility="visible";
      document.getElementById("about_us").style.transition="0.3s";
}
function aboutusout(){
      document.getElementById("about_us").style.visibility="hidden";
      document.getElementById("about_us").style.transition="0.1s";
}
// alert box onmouseover logo
function mainlogofooter(){
      alert(">>>>>>>>  WELCOME to YUNiK TECHNOLOGIES  <<<<<<<<");
}
function contactus(){
      document.getElementById("about_us").style.visibility="visible";
      document.getElementById("about_us").style.backgroundImage="URL('images/contactus.jpg')";
      document.getElementById("contactH2").innerText="contact Details:";
      document.getElementById("contactH2").style.marginLeft="10%";
      document.getElementById("contactH2").style.width="35%";
      document.getElementById("contactP").innerText="Phone: +91-9494558983";
      document.getElementById("contactP").style.margin="70px 0px 0px 5%";
      document.getElementById("contactSpan").innerText="Mail-ID: ummedashivakumar1020@gmail.com";
      document.getElementById("contactSpan").style.left="15%";
      document.getElementById("contactSpan").style.top="18%";
}
function contactusout(){
      document.getElementById("about_us").style.visibility="hidden";
}
