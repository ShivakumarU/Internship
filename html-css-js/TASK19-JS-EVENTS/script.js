// let listcopy=[];
// document.getElementById("btn1").addEventListener("click",function(){
//       listcopy.push(document.getElementById("textarea1").value);
//       console.log(listcopy);
//       document.getElementById("textarea1").value="";
// })
// document.getElementById("btn2").addEventListener("click",function(){
//       document.getElementById("textarea2").innerHTML=listcopy;
// })
// document.getElementById("btn3").addEventListener("click",function(){
//       document.getElementById("textarea2").value="";
// })

let copyText = document.getElementById("textarea1");
let pasteText = document.getElementById("textarea2");
document.getElementById("btn1").addEventListener("click", () => {
      copyText.select();
      navigator.clipboard.writeText(copyText.value);
})
document.getElementById("btn2").addEventListener("click", () => {
      pasteText.value = copyText.value;
})
document.getElementById("btn3").addEventListener("click",()=>{
      let textAreas = document.querySelectorAll("textarea");
      textAreas.forEach((textarea) => (textarea.value = ""));
});

