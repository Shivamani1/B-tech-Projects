const options=document.querySelectorAll(".style");
const msg=document.querySelector(".msg");
const us=document.querySelector("#u");
const cs=document.querySelector("#c");
const btn=document.querySelector("#btn");
btn.addEventListener("click",()=>{
    us.innerText=0;
    cs.innerText=0;
    msg.innerText="play your move";
    msg.style.backgroundColor="black";
    u=0;
    c=0;
});
let u=0;
let c=0;
const showwinner=(userwin,useroption,compoption)=>{
    if(userwin){
        u++;
        us.innerText=u;
        msg.innerText=`YOU WON! your ${useroption} beats ${compoption}`;
        msg.style.backgroundColor="green";
    }
    else{
        c++;
        cs.innerText=c;
        msg.innerText=`YOU LOSE.  ${compoption} beats your ${useroption}`;
        msg.style.backgroundColor="red";
    }
}
const Game=(useroption)=>{
    const arr=["rock","paper","scissor"]
const compindx=Math.floor(Math.random()*3);
console.log(compindx)
const compoption=arr[compindx];
if(useroption===compoption){
draw();
}
else{
    let userwin=true;
    if(useroption==="rock")
userwin=compoption==="scissor"?true:false;
    else if(useroption==="paper")
userwin=compoption==="rock"?true:false;
    else
userwin=compoption==="paper"?true:false;   
showwinner(userwin,useroption,compoption);

}
}

const draw=()=>{
    msg.innerText="GAME WAS DRAW";
    msg.style.backgroundColor="black";

}




options.forEach((option)=>{
    option.addEventListener("click",()=>{
const useroption=option.getAttribute("id");
Game(useroption);

});
});