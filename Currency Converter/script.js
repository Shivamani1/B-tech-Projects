const URL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const selects=document.querySelectorAll("select");
const from=document.querySelector(".subsub1 select");
const to=document.querySelector(".subsub2 select");
const btn=document.querySelector(".btn");
const msg=document.querySelector(".msg");
for(let select of selects){
for(let code in countryList){
let Option=document.createElement("option");
Option.innerText=code;
Option.value=code;
 if (select.name === "from" && code === "USD") {
    Option.selected = "selected";
  } else if (select.name === "to" && code === "INR") {
    Option.selected = "selected";
  }
select.append(Option);

} 
select.addEventListener("change",(obj)=>{
 updateflag(obj.target);
});   
}
//update exchange
const updateExchange=async ()=>{
    let amount=document.querySelector("input");
let amt=amount.value;
if(amt<1||amt===""){
amount.value="1";
amt=1;
}
 const url=`${URL}/${from.value.toLowerCase()}/${to.value.toLowerCase()}.json`;
 let response=await fetch(url);
let data=await response.json();
let rate=data[to.value.toLowerCase()];
let finalamt=rate*amt;
msg.innerText=`${amt} ${from.value}=${finalamt} ${to.value}`

}

const updateflag=(ele)=>{
    let flag=ele.value;
    flag=countryList[flag];
    let newsrc=`https://flagsapi.com/${flag}/flat/64.png`;
    let img=ele.parentElement.querySelector("img");
    img.src=newsrc;
}



btn.addEventListener("click", (evt)=>{
evt.preventDefault();
updateExchange();
});
window.addEventListener("load",()=>{
    updateExchange();
});

