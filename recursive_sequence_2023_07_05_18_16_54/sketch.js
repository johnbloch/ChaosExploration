function recursion(start, end, r, x1){
  let sequence = [x1]
  for(let i = 0; i < end; i++){
    sequence.push(r*sequence[i]*(1-sequence[i]))
  }
  sequence.splice(0,start-1)
  return sequence;
}

function setup() {
  let r = parseFloat(prompt("r value: "))
  let x1 = parseFloat(prompt("x_1 value: "))
  background("white")
  let start = 1
  let end = 100
  createCanvas(windowWidth, windowHeight);
  let sequence = recursion(start,end,r, x1)
  graphSequence(sequence);
  console.log(sequence);
  stroke("black")
  fill("black")
  textSize(20)
  text("n", width/2-20, height-20)
  text("x_n", 10, height/2)
}
function graphSequence(arr){
  for(let i = 0; i < arr.length; i++){
    let x = map(i, 0, arr.length-1, 50, width-50)
    let y = map(arr[i], Math.min(...arr), Math.max(...arr), height-50, 50);
    fill("black")
    circle(x,y, 10)
    if(i>0){
      stroke("black")
      line(x,y,map(i-1, 0, arr.length-1, 50, width-50), map(arr[i-1], Math.min(...arr), Math.max(...arr), height-50, 50))
    }
  }
}