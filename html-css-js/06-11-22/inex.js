function play_play(){
      document.getElementById("veedio").play()
}
function pause_pause(){
      document.getElementById("veedio").pause()
}
let email = document.getElementById("EMAIL");
let password = document.getElementById("PASSWORD");
let x=[];
function login_Action(){
      let str = email.value.split("@");
      if(email.value==null||email.value==""){
            document.getElementById("error1").innerText="email should not be empty";
      }
      else if(email.value.match("@")!="@"){
            document.getElementById("error1").innerText="email should include '@'";
      }
      else if(str[1]!="gmail.com"){
            document.getElementById('error1').innerText="email should end with gmail.com";
      }
      else if(password.value==null||password.value==""){
            document.getElementById("error2").innerText="password should not be empty"
      }
      else if(password.value.length<8){
            document.getElementById("error2").innerText="password should contain atleast 8 characters"
      }
      else{
            document.getElementById("form2").style.zIndex="1";
      }
}