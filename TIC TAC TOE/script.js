let boxes=document.querySelectorAll(".box");
let resbtn = document.querySelector(".res-btn");
let h=document.querySelector(".win");
let turn=true;

const patterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const showWinner=(a)=>{
if(a==="O")
h.innerText="CONGRATULATIONS PLAYER O";
else if(a==="X")
h.innerText="CONGRATULATIONS PLAYER X";
m=1;

}


 const checkWinner=()=>{
    for(let x of patterns){
        console.log(n);
        let a=boxes[x[0]].innerText;
        let b=boxes[x[1]].innerText;
        let c=boxes[x[2]].innerText;
        
        if(a!=""&&b!=""&&c!=""){
            if(a===b&&b===c){
                for(let box of boxes){
                    box.disabled=true;
                }
                showWinner(a);
               }}}
               


 }
        resbtn.addEventListener("click",()=>{
            for(let box of boxes){
                box.disabled=false;
                box.innerText="";
            }
            turn=true;
            h.innerText="";
            m=0;
            n=0;
        });

let n=0,m=0;
boxes.forEach((box)=>{
box.addEventListener("click",()=>{
   
if(turn){
    turn=false;
    box.innerText = "O";
}else{
    turn=true;
    box.innerText="X";
}
n++;
box.disabled=true;
checkWinner();
if(n===9&&m===0)
 h.innerText="DRAW";
});

});




