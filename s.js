let timer = 60;
let inscore = 0;
let hitrn = 0;

function Bubble(){
    let count = "";
    for (let i = 1; i<=119; i++){
        let number = Math.floor(Math.random()*10);
         count += `<div id="Bubble">${number}</div>`;
    }
    
    document.querySelector(".panelbtm").innerHTML = count;
}

function hit(){
        hitrn = Math.floor(Math.random()*10);
     document.querySelector('#hiter').textContent = hitrn;
}

function score(){
      inscore += 10;
      document.querySelector('#scorer').textContent =  inscore;
}



function runtimer(){
 let stoptimer = setInterval(function(){
           if(timer>0){
            timer--;
           document.querySelector("#timer1").textContent = timer;
        }else{
              clearInterval(stoptimer);
              document.querySelector(".panelbtm").innerHTML = `<h1>GAME OVER</h1> <br/> <h1> YOUR SCORE ${inscore}</h1>`
        }
    },1000)

}
document.querySelector(".panelbtm").addEventListener("click",function(dets){
        let clickednum = Number(dets.target.textContent);
        if(clickednum === hitrn){
           score();
           Bubble();
           hit();
        }
 } );

 runtimer();
 hit();
 Bubble();
//  score();











