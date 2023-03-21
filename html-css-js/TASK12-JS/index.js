let itemslist =[];
function insert(){
    itemslist.push("<br><br>   Product id:  "+document.getElementById("input1").value +
                 "<br> cost:$"+document.getElementById("input2").value+
                 "<br> item-description: "+document.getElementById("input3").value+
                 "<br> Date and Time: "+document.getElementById("input4").value );
    console.log(itemslist);
    document.getElementById("input1").value='';
    document.getElementById("input2").value='';
    document.getElementById("input3").value='';
    document.getElementById("input4").value='';
}
function display(){
    document.getElementById('output').innerHTML=itemslist;
}