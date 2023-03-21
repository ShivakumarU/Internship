document.getElementById("buTTon").addEventListener("click",function(){
      const key=document.getElementById("input1").value;
      const value=document.getElementById("input2").value;
      localStorage.setItem(key,value);
      document.getElementById("output").innerHTML=`<br> ${key}:${localStorage.getItem(key)}`;
});
