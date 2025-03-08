let score=0
let ans=98
iq=0
let btn=document.getElementsByClassName("btt")
function bt(){
    let in1=document.getElementById("inp").value
    if(in1==""){
        alert("enter something")
    
    }
    if(in1==ans)
    {
        score++
        console.log(score)
        let btt=document.getElementsByClassName("btt")[0].disabled=true
            
    }
    
        
    
    
     
    
}  

function wr(){
    
    let wr1=document.getElementById("wr1").disabled=true
    let wr2=document.getElementById("wr2").disabled=true
    let wr3=document.getElementById("wr3").disabled=true
    let an=document.getElementById("an").disabled=true
    
    
    
    
    
}


function anss(){
    score++
    
    let an=document.getElementById("an").disabled=true
    console.log(score)
    
wr()


}
 function th(){
let third=document.getElementById("inv").value
if(third==""){
    alert("enter something")
 }

else if(third==36){

    score++
    console.log(score)
    let nebt=document.getElementById("th1").disabled=true
}
  
 
 
  
}
function ans4(){
    let wr41=document.getElementById("wr4.1").disabled=true
    let wr42=document.getElementById("wr4.2").disabled=true
    let wr43=document.getElementById("wr4.3").disabled=true
    let ans4=document.getElementById("an4").disabled=true
    console.log(score)
    
}
    
    

function answrihgt(){
    
    score++
    ans4()
    console.log(score)
    
}

function fwc(){
    
    score++
    fwr()
    console.log(score)
    
}
    
function fwr(){
    let wr41=document.getElementById("fif1").disabled=true
    let wr42=document.getElementById("fif2").disabled=true
    let wr43=document.getElementById("fif3").disabled=true
    let ans4=document.getElementById("fif4").disabled=true
    console.log(score)
    
}
let ul=document.getElementById("finalresult")
let nw=document.createElement("h1")

function sub(){
   if(score==0){
    alert("Try something")
   }
   
if(score >= 4 && score <= 5)
{
    iq=116
  
    nw.textContent="Your iq is "+iq+" (abouve average) "
    ul.appendChild(nw)
  console.log(iq)
}
else if(score >=2 && score <=3){
    iq=110
    nw.textContent="Your iq is "+iq+" (average)"
    ul.appendChild(nw)
}
else if(score===1){
   
    iq=85
    
    nw.textContent="Your iq is "+iq+" (below average)"
    ul.appendChild(nw)
    console.log(iq)

}}