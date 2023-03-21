function mail(){
      let a,b,c;
      a=document.getElementById("username").value;
      b=a.split("@");
      c=b[0];
      document.getElementById("output").innerHTML="welcome-"+c;

}
function myShow(){
      var x=document.getElementById("passwrd");
      if (x.type==="password"){
            x.type="text";
            document.getElementById("sho").src="eyeclose.png";
      }
      else{
            x.type="password";
            document.getElementById("sho").src="eyeopen.png";
      }
}