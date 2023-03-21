function square(){
      var a=eval(document.getElementById("num")).value;
      var b=a*a;
      document.getElementById("res").innerHTML="square is " +b;
  
      }
      function evenodd(){
          var a=eval(document.getElementById("num")).value;
          if(a%2 == 0){
              document.getElementById("res").innerHTML=a +"is even number";
          }
          else{
              document.getElementById("res").innerHTML=a+" is an odd number";
          }
      }
      function checkprime(){
          var a=eval(document.getElementById("num")).value;
          var count=0;
          if(a==0 || a==1)
          count=1;
          for(var i=2;i<=a/2;i++){
              if(a%i==0){
                  count=1;
                  break;
              }
          }
          if(count==0)
          document.getElementById("res").innerHTML=a+" is a prime number";
          else
          document.getElementById("res").innerHTML=a+ " is not a prime number";
      }
      function checkpalindrome(){
          var no=document.getElementById("num").value;
          var temp=0,r,rem;
          r=no;
          while(no>0){
              rem=no%10;
              temp=temp*10+rem;
              no=parseInt(no/10);
          }
          if(temp==r)
          document.getElementById("res").innerHTML=r+"  is a palindrome number";
          else
          document.getElementById("res").innerHTML=r+"  is not a palindrome number";
      }
      function reverse(){
          var no=document.getElementById("num").value;
          var temp=0,rem;
          while(no>0){
              rem=no%10;
              temp=temp*10+rem;
              no=parseInt(no/10);
          }
          document.getElementById("res").innerHTML=  temp +"  is the reverse of the given number";
      }
      function armstrong(){
          var no=document.getElementById("num").value;
          var temp=0,rem,a,nod;
          a=no;
          nod=no.length;
          while(no>0){
              rem=no%10;
              temp=temp+rem**nod;
              no=parseInt(no/10);
          }
          if(temp==a)
              document.getElementById("res").innerHTML= a+"  is an armstrong number";
          else    
              document.getElementById("res").innerHTML= a+"  is not an armstrong number";
      }
      function add(){
          var x=eval(document.getElementById("num1").value);
          var y=eval(document.getElementById("num2").value);
          document.getElementById("res1").innerHTML="addition of "+x+"+"+y+" is ="+(x+y);
      }
      function sub(){
          var x=parseInt(document.getElementById("num1").value);
          var y=parseInt(document.getElementById("num2").value);
          document.getElementById("res1").innerHTML=" difference between "+ x + "and " +y+ " is "+(x-y);
      }
      function mul(){
          var x=parseInt(document.getElementById("num1").value);
          var y=parseInt(document.getElementById("num2").value);
          document.getElementById("res1").innerHTML=" multification of  "+ x + "and " +y+ " is "+(x*y);
      }
      function div(){
          var x=parseInt(document.getElementById("num1").value);
          var y=parseInt(document.getElementById("num2").value);
          document.getElementById("res1").innerHTML=" division of  "+ x + "and " +y+ " is "+(x/y);
      }
      function mod(){
          var x=parseInt(document.getElementById("num1").value);
          var y=parseInt(document.getElementById("num2").value);
          document.getElementById("res1").innerHTML=" modulous of  "+ x + "and " +y+ " is "+(x%y);
      }