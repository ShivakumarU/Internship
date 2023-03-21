// var a:any[] = [];
// document.getElementById("btn")?.addEventListener("click", () => {
//       a.push((<HTMLInputElement>document.getElementById("userName")).value,
//       (<HTMLInputElement>document.getElementById("Age")).value,
//       (<HTMLInputElement>document.getElementById("D_O_B")).value,
//       (<HTMLInputElement>document.getElementById("gender")).value,
//       (<HTMLInputElement>document.getElementById("mobile")).value,
//       (<HTMLInputElement>document.getElementById("company")).value);
//       console.log(a);
// })
// type Details ={
//       Username:;
//       age:number;
//       dob:number|string;
//       gender:string;
//       mobile:number;
//       company:string;
// }
// let data:Details={
//       Username:(<HTMLInputElement>document.getElementById("username").value);
// }
// let finalData:data[];
export{}
type Details = {Username:string,
      Age:number,
      Dob:number,
      Gender:string,
      Mobile:number,
      Company:string};
let DetailsArray: Details[]=[];

function addingDetails() {
const usernameInput = document.getElementById("userName") as HTMLInputElement;
const ageInput = document.getElementById("Age") as HTMLInputElement;
const dobInput = document.getElementById("D_O_B") as HTMLInputElement;
const genderInput = document.getElementById("gender") as HTMLInputElement;
const mobileInput = document.getElementById("mobile") as HTMLInputElement;
const companyInput = document.getElementById("company") as HTMLInputElement;
const b = {Username:usernameInput.value,
      Age:ageInput.value,
      Dob:dobInput.value,
      Gender:genderInput.value,
      Mobile:mobileInput.value,
      Company:companyInput.value
      }
DetailsArray.push(b)
console.log(DetailsArray)
}

