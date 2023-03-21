let names=["shiva","pranay","suresh","sai","nithin",["prashanth","pranith"]];
document.getElementById("p1").innerHTML=names[0]+" >>names[0]>>calling an array element using indexing";
document.getElementById("p2").innerHTML=names[5][0]+" >>names[5][0]>>calling a nested array element using indexing";
names[3]="saiteja";
document.getElementById("p3").innerHTML=names+" >>>>change/replace an element of array";
names.push("siddartha");
document.getElementById("p4").innerHTML=names+" >>>>push() method adds a new element to an array at the end";
names.pop();
document.getElementById("p5").innerHTML=names+" >>>>pop() method removes the last element from an array";
names.shift();
document.getElementById("p6").innerHTML=names+" >>>>shift() method removes the first element from an array and shifts the other elements to the left";
names.unshift("shiva");
document.getElementById("p7").innerHTML=names+" >>>>unshift() method adds a new element at the beginning";
document.getElementById("p8").innerHTML=names.length+" >>>>finding length of the array";
document.getElementById("p9").innerHTML=names.slice(3)+" >>>slice() method slices out a peice of array into a new array";
document.getElementById("p10").innerHTML=names.indexOf("saiteja")
