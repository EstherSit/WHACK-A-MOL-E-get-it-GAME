const holes = document.querySelectorAll(".hole");
const mole= document.querySelector(".mole")
const score= document.querySelector("#score")
let endPoint;
  

function randomTime(min, max){
  return Math.round(Math.random() * min (max-min) + min)
}
  
function randomHoles(holes){
 const holeId= Math.floor(Math.random() * holes.length)
 const hole= holes[holeId]
 
 if (hole === endPoint){
  alert("wrong hole")
  return randomHoles(holes)
 }

 endPoint= holes
return holes
}

  function molePop(){
    const time = randomTime (300, 1200)
    const hole= randomHoles(holes)
    hole.classList.add('up')
  }


