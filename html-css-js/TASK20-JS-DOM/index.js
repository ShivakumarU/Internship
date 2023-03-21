function mySelect(){
      var x=document.getElementById("colors").value;
      document.getElementById("outPut").style.backgroundColor=x;
}

function onOff(){
      if(document.getElementById("off").src.match("pic_bulboff.gif")){
            document.getElementById("off").src="pic_bulbon.gif";
            document.getElementById("spanB").style.marginLeft="30px";
            document.getElementById("newB").style.backgroundColor="green";
            document.getElementById("spanB").innerHTML="ON";
      }
      else{
            document.getElementById("off").src="pic_bulboff.gif";
            document.getElementById("spanB").style.marginLeft="-3.6px";
            document.getElementById("newB").style.backgroundColor="gray";
            document.getElementById("spanB").innerHTML="OFF";
      }
}