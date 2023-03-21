function myftn1(calll){
      calll(5)
}
function evenodd(num){
      if(num%2==0){
            console.log("even")
      }else{
            console.log("odd")
      }
}
myftn1(evenodd)